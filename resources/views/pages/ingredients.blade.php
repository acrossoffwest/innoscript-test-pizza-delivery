@extends('layouts.app')
@section('h1', 'Ingredients')
@section('content')
    <div class="w-2/3 mx-auto">
        <div class="bg-white shadow-md rounded my-6">
            <table class="text-left w-full border-collapse"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                <thead>
                <tr>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Available</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Remain</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Weight</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Cost</th>
                </tr>
                </thead>
                <tbody>
                @forelse($ingredients as $ingredient)
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-4 px-6 border-b border-grey-light">{{ $ingredient->name }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ $ingredient->is_available ? 'Yes' : 'No' }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ $ingredient->remain }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ $ingredient->weight }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ $ingredient->cost }}</td>
                    </tr>
                @empty
                    <tr class="hover:bg-grey-lighter"><td class="py-4 px-6 border-b border-grey-light">You don't have rows</td></tr>
                @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection
