@extends('layouts.app')
@section('h1', config('app.name'))
@section('content')
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-content-center">
        @forelse($products as $product)
            <div class="px-4 py-2 m-2">
                <div class="flex bg-white shadow-lg rounded-lg overflow-hidden" style="height: 250px;">
                    <div class="w-full bg-cover" style="background-image: url('{{ $product->image->publicPath }}')">
                    </div>
                    <div class="w-full p-4">
                        <h1 class="text-gray-900 font-bold text-xl">{{ str_limit($product->name, 10) }}</h1>
                        <p class="mt-2 text-gray-600 text-sm">{{ str_limit($product->description, 100) }}</p>
                        <div class="flex item-center mt-2">
                            {{ str_limit(implode(', ', $product->defaultIngredients->pluck('name')->all()), 15) }}
                        </div>
                        <div class="flex item-center justify-between mt-3">
                            <h1 class="text-gray-700 font-bold text-xl">{{ $product->cost }}p</h1>
                            <div class='w-1/4'>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-1 px-1 leading-tight focus:outline-none  focus:border-gray-500' id='' type='number' placeholder='' value="1">
                            </div>
                            <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">+</button>
                        </div>
                    </div>
                </div>
            </div>
        @empty
        @endforelse
    </div>
@endsection
