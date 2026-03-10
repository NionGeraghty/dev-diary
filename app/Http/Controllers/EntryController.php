<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

    public function destroy($id)
    {
        Entry::findOrFail($id)->delete();
        return Inertia::location('/entries');
    }

    public function edit($id)
    {
        $entry = Entry::findOrFail($id);
        return inertia('EditEntry', ['entry' => $entry]);
    }

    public function update(Request $request, $id)
    {
        $entry = Entry::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'hours_coded' => 'required|numeric|min:0',
            'tags' => 'nullable|string',
        ]);

        $entry->update($validated);

        return Inertia::location('/entries');
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

        return Inertia::location('/entries');
    }
}