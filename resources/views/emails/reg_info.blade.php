@extends('emails.base')
@section('preheader', 'Registration info')
@section('body')
    <p>Hello, bellow you can find your credentials for enter to your account on our delivery system:</p>
    <p><b>Email(login): </b>{{ $email }}</p>
    <p><b>Password: </b>{{ $password }}</p>
@endsection
