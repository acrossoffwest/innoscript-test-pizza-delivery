@extends('layouts.app')
@section('h1', __('Cart'))
@section('content')
    <cart @if(auth()->check()) :user="{{ json_encode(auth()->user()) }}" @endif></cart>
@endsection
