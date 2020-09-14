@extends('layouts.app')
@section('h1', __('Types'))
@section('content')
    <div class="w-2/3 mx-auto">
        <div class="bg-white shadow-md rounded my-6">
            <table class="text-left w-full border-collapse"> <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                <thead>
                <tr>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Unit</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Categories</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Products</th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Options</th>
                </tr>
                </thead>
                <tbody>
                @forelse($types as $type)
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-4 px-6 border-b border-grey-light">
                            {{ $type->name }}
                        </td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            {{ $type->unit }}
                        </td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            <a href="{{ route('admin.types.categories.index', $type) }}">
                                {{ $type->categories()->count() }}
                            </a>
                        </td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            {{ $type->products()->count() }}
                        </td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            <a href="{{ route('admin.types.product_options.index', $type) }}">
                                {{ $type->options()->count() }}
                            </a>
                        </td>
                    </tr>
                @empty
                    <div class="row">You don't have types</div>
                @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection
