<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EntriesController extends Controller
{
    public function index()
    {
        return inertia('Entries');
    }
}
