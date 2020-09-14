@extends('layouts.app')
@section('h1', 'Categories')
@section('content')
    <div class="w-2/3 mx-auto">
        <div class="bg-white shadow-md rounded my-6">
            <table class="text-left w-full border-collapse"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                <thead>
                <tr>
                    @if(!isset($type))
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                    @endif
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Category name</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Products count</th>
                </tr>
                </thead>
                <tbody>
                @forelse($categories as $category)
                    <tr class="hover:bg-grey-lighter">
                        @if(!isset($type))
                            <td class="py-4 px-6 border-b border-grey-light">{{ $category->type->name }}</td>
                        @endif
                        <td class="py-4 px-6 border-b border-grey-light">{{ $category->name }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ $category->products()->count() }}</td>
                    </tr>
                @empty
                    <tr class="hover:bg-grey-lighter"><td class="py-4 px-6 border-b border-grey-light">You don't have rows</td></tr>
                @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection
