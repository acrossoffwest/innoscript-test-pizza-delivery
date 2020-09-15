@extends('layouts.app')

@section('h1', 'Products')
@section('content')
    <div class="w-2/3 mx-auto">
        <div class="bg-white shadow-md rounded my-6">
            <table class="text-left w-full border-collapse"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                <thead>
                <tr>
                    @if(!isset($type))
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Type</th>
                    @endif
                    @if(!isset($category))
                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Category</th>
                    @endif
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Product</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Description</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Image</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
                </tr>
                </thead>
                <tbody>
                @forelse($products as $product)
                    <tr class="hover:bg-grey-lighter">
                        @if(!isset($type))
                            <td class="py-4 px-6 border-b border-grey-light">{{ $product->type->name }}</td>
                        @endif
                        @if(!isset($category))
                            <td class="py-4 px-6 border-b border-grey-light">{{ \Illuminate\Support\Str::limit($product->category->name, 9) }}</td>
                        @endif
                        <td class="py-4 px-6 border-b border-grey-light">{{ $product->name }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ \Illuminate\Support\Str::limit($product->description, 10) }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            @if($product->image)
                                <img src="{{ $product->image->public_path }}" alt="" width="50">
                            @endif
                        </td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            <button class="btn btn-primary btn-sm" type="button" onclick="event.preventDefault(); document.getElementById('row-{{ $product->id }}').className = document.getElementById('row-{{ $product->id }}').className != '' ? '' : 'hidden'">
                                Full info
                            </button>
                        </td>
                    </tr>
                    <tr class="hidden" id="row-{{ $product->id }}">
                        <td colspan="4" class="p-5">
                            <b>Description:</b>
                            <p>{{ $product->description }}</p>
                            <br>
                            <br>
                            <b>Default ingredients:</b>
                            <p>
                                @forelse($product->defaultIngredients as $index => $ingredient)
                                    <b>{{ $ingredient->name }}</b>: +{{ $ingredient->weight }} {{ $product->type ? $product->type->unit : '' }} +{{ $ingredient->cost }} $
                                    <br>
                                @empty
                                    <div class="row">Product hasn't options</div>
                                @endforelse
                                </p>
                                <br>
                                <br>
                                <b>Extra ingredients:</b>
                                <p>
                                @forelse($product->extraIngredients as $index => $ingredient)
                                        <b>{{ $ingredient->name }}</b>: +{{ $ingredient->weight }} {{ $product->type ? $product->type->unit : '' }} +{{ $ingredient->cost }} $
                                        <br>
                                @empty
                                    <div class="row">Product hasn't options</div><br>
                                @endforelse
                                <br>
                                <br>
                                </p>
                                <b>Options:</b>
                                <p>
                                    @forelse($product->options as $index => $option)
                                        <b>{{ $option->name }}</b>: {{ $option->pivot->value }} {{ $option->unit }} +{{ $option->pivot->weight }} {{ $product->type ? $product->type->unit : '' }} +{{ $option->pivot->cost }} $
                                        <br>
                                    @empty
                                <div class="row">Product hasn't options</div>
                                @endforelse
                                </p>
                        </td>
                    </tr>
                @empty
                    <tr class="hover:bg-grey-lighter"><td class="py-4 px-6 border-b border-grey-light">You don't have rows</td></tr>
                @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection
