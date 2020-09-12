@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ isset($type) ? $type->name.' :: ' : '' }}{{ __('Product options') }}</div>
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
                            <div class="col-4"><b>Option name</b></div>
                            <div class="col-4"><b>Unit</b></div>
                        </div>
                        @forelse($productOptions as $option)
                            <div class="row">
                                @if(!isset($type))
                                    <div class="col-2">{{ $option->type->name }}</div>
                                @endif
                                <div class="col-4">{{ $option->name }}</div>
                                <div class="col-4">{{ $option->unit }}</div>
                            </div>
                        @empty
                            <div class="row">You don't have categories</div>
                        @endforelse
                        <div class="row">
                            @if(!isset($type))
                                <div class="col-2"><b>Type</b></div>
                            @endif
                            <div class="col-4"><b>Option name</b></div>
                            <div class="col-4"><b>Unit</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
