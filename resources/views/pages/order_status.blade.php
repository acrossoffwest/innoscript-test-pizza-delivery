@extends('layouts.app')
@section('h1', __('Order status').': '.ucfirst($order->status))
@section('content')
    <div class="flex">
        <h2 class="text-2xl">Order #{{ $order->id }} from {{ $order->created_at }}</h2>
    </div>
    <div class="w-full mx-auto">
        <div class="bg-white shadow-md rounded my-6">
            <table class="text-left w-full border-collapse"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                <thead>
                <tr>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Item</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Count</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Cost</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Total cost</th>
                </tr>
                </thead>
                <tbody>
                    @forelse($order->items as $item)
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-4 px-6 border-b border-grey-light">
                                <img src="{{ $item->product->image->publicPath }}" alt="" width="50px">
                            </td>
                            <td class="py-4 px-6 border-b border-grey-light">
                                {{ $item->product->name }}
                            </td>
                            <td class="py-4 px-6 border-b border-grey-light">
                                {{ $item->count }}
                            </td>
                            <td class="py-4 px-6 border-b border-grey-light">
                                {{ $item->cost }}
                            </td>
                            <td class="py-4 px-6 border-b border-grey-light">
                                {{ $item->cost * $item->count }}
                            </td>
                        </tr>
                    @empty
                        <div class="row">You don't have items</div>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection
