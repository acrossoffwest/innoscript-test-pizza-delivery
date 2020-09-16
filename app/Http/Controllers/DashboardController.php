<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('pages.dashboard')->with(
            'orders', auth()->user()->hasRole('admin') ? Order::query()->orderByDesc('updated_at')->get() : auth()->user()->orders()->orderByDesc('updated_at')->get()
        );
    }
}
