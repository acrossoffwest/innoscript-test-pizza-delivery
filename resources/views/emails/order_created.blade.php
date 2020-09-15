@extends('emails.base')
@section('preheader', 'You order created')
@section('body')
    <p>Your order was <b>created</b>. We will process your <a href="{{ $orderLink }}">order</a> as soon as possible.</p>
    <p>Thank you for your selection.</p>
    <p>Use this link for checking your order status: {{ $orderLink }}</p>
@endsection
