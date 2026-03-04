<?php

use Illuminate\Support\Facades\Route;
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

Route::get('/new-entry', [EntryController::class, 'create'])->name('new-entry.create');
Route::post('/entries', [EntryController::class, 'store']);  // POST for saving
Route::get('/entries', [EntryController::class, 'index'])->name('entries.index');
Route::get('/entries/{id}/edit', [EntryController::class, 'edit'])->name('entries.edit');
Route::post('/entries/{id}/delete', [EntryController::class, 'destroy'])->name('entries.delete');
Route::post('/entries/{id}', [EntryController::class, 'update'])->name('entries.update');
Route::get('/stats', [StatsController::class, 'index'])->name('stats.index');
