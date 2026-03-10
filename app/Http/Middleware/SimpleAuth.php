<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SimpleAuth
{
    public function handle(Request $request, Closure $next)
    {
        if (!session('authenticated')) {
            return Inertia::location('/login');
        }
        
        return $next($request);
    }
}