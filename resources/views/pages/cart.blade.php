@extends('layouts.app')
@push('beforeScripts')
    <script src="https://maps.googleapis.com/maps/api/js?key={{ config('services.google-api.places.key') }}&libraries=places"></script>
@endpush
@section('h1', __('Cart'))
@section('content')
    <cart @if(auth()->check()) :user="{{ json_encode(auth()->user()) }}" @endif></cart>
@endsection
