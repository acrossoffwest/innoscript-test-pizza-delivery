@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ isset($type) ? $type->name.' :: ' : '' }}{{ isset($category) ? $category->name.' :: ' : '' }}{{ __('Product') }}</div>
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
                            <div class="col-2"><b>Weight</b></div>
                            <div class="col-2"><b>Cost</b></div>
                        </div>
                        @forelse($products as $product)
                            <div class="row">
                                @if(!isset($type))
                                    <div class="col-2">{{ $product->type->name }}</div>
                                @endif
                                @if(!isset($category))
                                    <div class="col-2"><b>{{ $product->category->name }}</b></div>
                                @endif
                                <div class="col-2">{{ $product->name }}</div>
                                <div class="col-2">{{ $product->description }}</div>
                                <div class="col-2">{{ $product->weight }}</div>
                                <div class="col-2">{{ $product->cost }}</div>
                            </div>
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
                            <div class="col-2"><b>Weight</b></div>
                            <div class="col-2"><b>Cost</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
