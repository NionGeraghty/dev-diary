<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Illuminate\Http\Request;

class EntryController extends Controller
{
    // Show all entries
    public function index()
    {
        $entries = Entry::all();
        return inertia('Entries', ['entries' => $entries]);
    }

    // Show create form
    public function create()
    {
        return inertia('NewEntry');
    }

    // Save new entry
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'hours_coded' => 'required|numeric|min:0',
            'tags' => 'nullable|string',
        ]);

        Entry::create($validated);

        return redirect('/')->with('success', 'Entry saved!');
    }
}