<?php


namespace App\Http\Controllers;


use App\Models\Order;

class OrderController
{
    public function status(string $token)
    {
        $order = Order::query()->where('token', $token)->firstOrFail();
        return view('pages.order_status')
            ->with('order', $order);
    }
}
