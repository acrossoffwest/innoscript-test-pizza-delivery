@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ isset($type) ? $type->name.' :: ' : '' }}{{ isset($category) ? $category->name.' :: ' : '' }}{{ __('Products') }} ({{ $products->count() }})</div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <div class="row">
                            @if(!isset($type))
                                <div class="col-2"><b>Type</b></div>
                            @endif
                            @if(!isset($category))
                                <div class="col-2"><b>Category</b></div>
                            @endif
                            <div class="col-2"><b>Product</b></div>
                            <div class="col-2"><b>Description</b></div>
                            <div class="col-2"><b>Image</b></div>
                            <div class="col-2"><b></b></div>
                        </div>
                        @forelse($products as $product)
                            <div class="row">
                                @if(!isset($type))
                                    <div class="col-2">{{ $product->type->name }}</div>
                                @endif
                                @if(!isset($category))
                                    <div class="col-2">{{ \Illuminate\Support\Str::limit($product->category->name, 9) }}</div>
                                @endif
                                <div class="col-2"><b>{{ $product->name }}</b></div>
                                <div class="col-2">{{ \Illuminate\Support\Str::limit($product->description, 10) }}</div>
                                <div class="col-2">
                                    @if($product->image)
                                        <img src="{{ $product->image->public_path }}" alt="" width="50">
                                    @endif
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#collapse-{{ $product->id }}" aria-expanded="false" aria-controls="collapse-{{ $product->id }}">
                                        Full info
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="collapse" id="collapse-{{ $product->id }}">
                                        <div class="card card-body">
                                            <b>Description:</b>
                                            <p>{{ $product->description }}</p>
                                            <b>Default ingredients:</b>
                                            <p>
                                                @forelse($product->defaultIngredients as $index => $ingredient)
                                                    <span class="row">
                                                        <span class="col-12">
                                                            <b>{{ $ingredient->name }}</b>: +{{ $ingredient->weight }} {{ $product->type ? $product->type->unit : '' }} +{{ $ingredient->cost }} {{ 'р' }}
                                                        </span>
                                                    </span>
                                                    @empty
                                                        <div class="row">Product hasn't options</div>
                                                    @endforelse
                                                </p>
                                                <b>Extra ingredients:</b>
                                                <p>
                                                    @forelse($product->extraIngredients as $index => $ingredient)
                                                        <span class="row">
                                                            <span class="col-12">
                                                                <b>{{ $ingredient->name }}</b>: +{{ $ingredient->weight }} {{ $product->type ? $product->type->unit : '' }} +{{ $ingredient->cost }} {{ 'р' }}
                                                            </span>
                                                        </span>
                                                    @empty
                                                        <div class="row">Product hasn't options</div>
                                                    @endforelse
                                                </p>
                                                <b>Options:</b>
                                                <p>
                                                    @forelse($product->options as $index => $option)
                                                        <span class="row">
                                                            <span class="col-12">
                                                                <b>{{ $option->name }}</b>: {{ $option->pivot->value }} {{ $option->unit }} +{{ $option->pivot->weight }} {{ $product->type ? $product->type->unit : '' }} +{{ $option->pivot->cost }} {{ 'р' }}
                                                            </span>
                                                        </span>
                                                    @empty
                                                        <div class="row">Product hasn't options</div>
                                                    @endforelse
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        @empty
                            <div class="row">You don't have categories</div>
                        @endforelse
                        <div class="row">
                            @if(!isset($type))
                                <div class="col-2"><b>Type</b></div>
                            @endif
                            @if(!isset($category))
                                <div class="col-2"><b>Category</b></div>
                            @endif
                            <div class="col-2"><b>Product</b></div>
                            <div class="col-2"><b>Description</b></div>
                            <div class="col-2"><b>Image</b></div>
                            <div class="col-2"><b></b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
