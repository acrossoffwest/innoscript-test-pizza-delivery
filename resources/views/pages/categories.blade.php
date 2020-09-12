@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ isset($type) ? $type->name.' :: ' : '' }}{{ __('Categories') }}</div>
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
                            <div class="col-4"><b>Category name</b></div>
                            <div class="col-4"><b>Products count</b></div>
                        </div>
                        @forelse($categories as $category)
                            <div class="row">
                                @if(!isset($type))
                                    <div class="col-2">{{ $category->type->name }}</div>
                                @endif
                                <div class="col-4">{{ $category->name }}</div>
                                <div class="col-4">{{ $category->products()->count() }}</div>
                            </div>
                        @empty
                            <div class="row">You don't have categories</div>
                        @endforelse
                        <div class="row">
                            @if(!isset($type))
                                <div class="col-2"><b>Type</b></div>
                            @endif
                            <div class="col-4"><b>Category name</b></div>
                            <div class="col-4"><b>Products count</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
