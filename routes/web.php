<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\NewEntryController;

Route::get('/', function () {
    return Inertia::render('HomePage');
});

Route::get('/new-entry', [NewEntryController::class, 'create'])->name('new-entry.create');