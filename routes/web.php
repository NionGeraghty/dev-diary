<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\NewEntryController;
use App\Http\Controllers\EntriesController;
use App\Http\Controllers\StatsController;

Route::get('/', function () {
    return Inertia::render('HomePage');
});

Route::get('/new-entry', [NewEntryController::class, 'create'])->name('new-entry.create');
Route::get('/entries', [EntriesController::class, 'index'])->name('entries.index');
Route::get('/stats', [StatsController::class, 'index'])->name('stats.index');