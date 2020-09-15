@extends('emails.base')
@section('preheader', 'Your order accepted')
@section('body')
    <p>Order was <b>accepted</b>. Soon you will get you <a href="{{ $orderLink }}">order</a>.</p>
    <p>Thank you for your selection.</p>
    <p>Use this link for checking your order status: {{ $orderLink }}</p>
@endsection
