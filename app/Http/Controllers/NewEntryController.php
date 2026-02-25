<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewEntryController extends Controller
{
    public function create()
    {
        return inertia('NewEntry');
    }
}
