@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Ingredients') }}</div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <div class="row">
                            <div class="col-3"><b>Name</b></div>
                            <div class="col-2"><b>Available</b></div>
                            <div class="col-2"><b>Remain</b></div>
                            <div class="col-2"><b>Weight</b></div>
                            <div class="col-2"><b>Cost</b></div>
                        </div>
                        @forelse($ingredients as $ingredient)
                            <div class="row">
                                <div class="col-3">{{ $ingredient->name }}</div>
                                <div class="col-2">{{ $ingredient->is_available ? 'Yes' : 'No' }}</div>
                                <div class="col-2">{{ $ingredient->remain }}</div>
                                <div class="col-2">{{ $ingredient->weight }}</div>
                                <div class="col-2">{{ $ingredient->cost }}</div>
                            </div>
                        @empty
                            <div class="row">You don't have ingredients</div>
                        @endforelse
                        <div class="row">
                            <div class="col-3"><b>Name</b></div>
                            <div class="col-2"><b>Available</b></div>
                            <div class="col-2"><b>Remain</b></div>
                            <div class="col-2"><b>Weight</b></div>
                            <div class="col-2"><b>Cost</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
