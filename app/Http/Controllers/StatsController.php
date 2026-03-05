<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Carbon\Carbon;

class StatsController extends Controller
{
    public function index()
    {
        $entries = Entry::all();
        $totalHours = $entries->sum('hours_coded');
        
        // Calculate streak (same logic as homepage)
        $streak = 0;
        $dates = $entries->pluck('created_at')
            ->map(fn($date) => Carbon::parse($date)->format('Y-m-d'))
            ->unique()
            ->sort()
            ->values();
        
        if ($dates->isNotEmpty()) {
            $today = Carbon::today();
            $currentDate = $today;
            
            if (!$dates->contains($today->format('Y-m-d')) && 
                !$dates->contains($today->subDay()->format('Y-m-d'))) {
                $streak = 0;
            } else {
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
        
        return inertia('Stats', [
            'entries' => $entries,
            'totalHours' => $totalHours,
            'streak' => $streak,
        ]);
    }
}