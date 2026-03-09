<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Controllers\StatsController;
use App\Http\Controllers\EntryController;

Route::get('/', function () {
    $entries = \App\Models\Entry::all();
    
    // Calculate streak
    $streak = 0;
    $dates = $entries->pluck('created_at')
        ->map(fn($date) => \Carbon\Carbon::parse($date)->format('Y-m-d'))
        ->unique()
        ->sort()
        ->values();
    
    if ($dates->isNotEmpty()) {
        $today = \Carbon\Carbon::today();
        $currentDate = $today;
        
        // Check if there's an entry today or yesterday (streak is still alive)
        if (!$dates->contains($today->format('Y-m-d')) && 
            !$dates->contains($today->subDay()->format('Y-m-d'))) {
            $streak = 0;
        } else {
            // Count backwards from today
            $currentDate = $dates->contains($today->format('Y-m-d')) 
                ? $today 
                : $today->subDay();
            
            foreach ($dates->reverse() as $date) {
                if ($date === $currentDate->format('Y-m-d')) {
                    $streak++;
                    $currentDate->subDay();
                } else {
                    break;
                }
            }
        }
    }
    
    return Inertia::render('HomePage', [
        'entries' => $entries,
        'streak' => $streak
    ]);
});

Route::get('/entries', [EntryController::class, 'index'])->name('entries.index');
Route::get('/stats', [StatsController::class, 'index'])->name('stats.index');
Route::get('/new-entry', [EntryController::class, 'create'])->name('new-entry.create');
Route::get('/entries/{id}/edit', [EntryController::class, 'edit'])->name('entries.edit');

// Login routes
Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('/login', function (Request $request) {
    if ($request->password === env('APP_PASSWORD')) {
        Session::put('authenticated', true);
        return redirect('/');  // Use redirect instead of Inertia::location
    }
    
    return back()->withErrors(['password' => 'Incorrect password']);
});

Route::post('/logout', function () {
    Session::forget('authenticated');
    return redirect('/');  // Use redirect instead of Inertia::location
})->name('logout');

// Protected routes - need password to CREATE/EDIT/DELETE
Route::middleware('simple.auth')->group(function () {
    Route::post('/entries', [EntryController::class, 'store']);
    Route::post('/entries/{id}', [EntryController::class, 'update']);
    Route::post('/entries/{id}/delete', [EntryController::class, 'destroy']);
});