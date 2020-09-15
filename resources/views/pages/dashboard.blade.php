@extends('layouts.app')
@section('h1', 'My orders')
@section('content')
@if(auth()->check() && auth()->user()->hasRole('admin'))
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        {{ __('You are logged in '.config('app.name').' as '.config('roles.'.auth()->user()->role)) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endif
<div class="w-full mx-auto">
    <div class="bg-white shadow-md rounded my-6">
        <table class="text-left w-full border-collapse"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
            <thead>
            <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Created at</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Items</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Status</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Total cost</th>
            </tr>
            </thead>
            <tbody>
            @forelse($orders as $order)
                <tr class="hover:bg-grey-lighter">
                    <td class="py-4 px-6 border-b border-grey-light">
                        <a href="{{ $order->status_link }}"><img src="{{ count($order->items) ? $order->items->random()->product->image->publicPath : '' }}" alt="" width="50px"></a>
                    </td>
                    <td class="py-4 px-6 border-b border-grey-light">
                        <a href="{{ $order->status_link }}">{{ $order->created_at }}</a>
                    </td>
                    <td class="py-4 px-6 border-b border-grey-light">
                        <a href="{{ $order->status_link }}">{{ str_limit(implode(',', $order->items->map(fn ($item) => $item->product->name.' x '.$item->count)->all()), 100) }}</a>
                    </td>
                    <td class="py-4 px-6 border-b border-grey-light">
                        {{ ucfirst($order->status) }}
                    </td>
                    <td class="py-4 px-6 border-b border-grey-light">
                        {{ $order->total_cost }} <span v-html="getCurrencySymbol('{{ $order->currency }}')"></span>
                    </td>
                </tr>
            @empty
                <div class="row">You don't have orders</div>
            @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection
