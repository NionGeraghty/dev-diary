<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


use App\Http\Controllers\StatsController;
use App\Http\Controllers\EntryController;

Route::get('/', function () {
    return Inertia::render('HomePage');
});

Route::get('/new-entry', [EntryController::class, 'create'])->name('new-entry.create');
Route::post('/entries', [EntryController::class, 'store']);  // POST for saving
Route::get('/entries', [EntryController::class, 'index'])->name('entries.index');
Route::get('/entries/{id}/edit', [EntryController::class, 'edit'])->name('entries.edit');
Route::delete('/entries/{entry}', [EntryController::class, 'destroy'])->name('entries.destroy');
Route::get('/stats', [StatsController::class, 'index'])->name('stats.index');
