@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Types') }}</div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                            <div class="row">
                                <div class="col-2"><b>Name</b></div>
                                <div class="col-2"><b>Unit</b></div>
                                <div class="col-3"><b>Categories</b></div>
                                <div class="col-3"><b>Products</b></div>
                                <div class="col-2"><b>Options</b></div>
                            </div>
                        @forelse($types as $type)
                            <div class="row">
                                <div class="col-2">
                                    {{ $type->name }}
                                </div>
                                <div class="col-2">{{ $type->unit }}</div>
                                <div class="col-3">
                                    <a href="{{ route('admin.types.categories.index', $type) }}">
                                        {{ $type->categories()->count() }}
                                    </a>
                                </div>
                                <div class="col-3">{{ $type->products()->count() }}</div>
                                <div class="col-2">
                                    <a href="{{ route('admin.types.product_options.index', $type) }}">
                                        {{ $type->options()->count() }}
                                    </a>
                                </div>
                            </div>
                        @empty
                            <div class="row">You don't have types</div>
                        @endforelse
                            <div class="row">
                                <div class="col-2"><b>Name</b></div>
                                <div class="col-2"><b>Unit</b></div>
                                <div class="col-3"><b>Categories</b></div>
                                <div class="col-3"><b>Products</b></div>
                                <div class="col-2"><b>Options</b></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
