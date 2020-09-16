@extends('layouts.app')
@section('h1', config('app.name'))
@section('content')
    @forelse($types as $type)
        <h2 class="text-gray-900 font-bold ml-6 text-3xl">{{ str_limit($type->name, 10) }}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-content-center">
        @forelse($type->products as $product)
            <div class="px-4 py-2 m-2">
                <div :class="`md:flex ${ !$store.getters.items[{!! $product->id !!}] ? 'bg-white' : 'bg-orange-200' } shadow-lg rounded-lg overflow-hidden item`" :key="updateDetailedCounts">
                    <img class="md:hidden w-full" src="{{ $product->image->publicPath }}" alt="">
                    <div class="w-full bg-cover cursor-pointer hidden sm:block" style="background-image: url('{{ $product->image->publicPath }}')" @click="$refs['product-{{ $product->id }}'].$emit('toggle')"></div>
                    <div class="w-full p-4">
                        <h3 class="text-gray-900 font-bold text-xl cursor-pointer" @click="$refs['product-{{ $product->id }}'].$emit('toggle')">{{ str_limit($product->name, 10) }}</h3>
                        <p class="mt-2 text-gray-600 text-sm cursor-pointer" @click="$refs['product-{{ $product->id }}'].$emit('toggle')">{{ str_limit($product->description, 90) }}</p>
                        <div class="flex item-center mt-2">
                            {{ str_limit(implode(', ', $product->defaultIngredients->pluck('name')->all()), 15) }}
                        </div>
                        <div class="flex item-center justify-between mt-3">
                            <h3 class="text-gray-700 font-bold text-xl">
                                <span v-html="costWithCurrencyRate({{ $product->cost }})"></span>
                                    <span v-html="getCurrencySymbol($store.getters.currentCurrency)"></span>
                                    <span v-if="$store.getters.items['{!! $product->id !!}']"> x
                                        <span class="text-orange-600" v-html="$store.getters.items['{!! $product->id !!}'].count"></span>
                                    </span>
                            </h3>
                            <div>
                                <button v-if="$store.getters.items[{!! $product->id !!}]" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" @click="$store.commit('removeItem', {{ $product->id }}); ++updateDetailedCounts">-</button>
                                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" @click="$store.commit('addItem', {{ json_encode($product) }}); ++updateDetailedCounts">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <modal ref="product-{{ $product->id }}">
                <template #header><h2 class="text-gray-900 font-bold text-2xl">{{ $product->name }}</h2></template>
                <template #body>
                    <div class="block" style="min-height: 30vh">
                        <img src="{{ $product->image->publicPath }}" class="w-full" alt="">
                        <p class="mt-5">
                            {{ $product->description }}
                        </p>
                        <p>
                            <b>Ingredients: </b> {{ implode(', ', $product->defaultIngredients->pluck('name')->all()) }}
                        </p>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-between mt-3" :key="updateDetailedCounts">
                        <div class="justify-between w-1/3">
                            <div class="inline">
                                <button class="px-3 ml-0  py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" @click="$store.commit('addItem', {{ json_encode($product) }}); ++updateDetailedCounts">+</button>
                                <button v-if="$store.getters.items[{!! $product->id !!}]" class="px-3 mr-2 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" @click="$store.commit('removeItem', {{ $product->id }}); ++updateDetailedCounts">-</button>
                            </div>
                            <span class="text-gray-700 font-bold text-xl">{{ $product->cost }}$ <span v-if="$store.getters.items[{!! $product->id !!}]"> x <span class="text-orange-600" v-html="$store.getters.items[{!! $product->id !!}].count"></span></span></span>
                        </div>
                        <div>
                            <button class="px-3 py-2 bg-gray-400 text-white text-xs font-bold uppercase rounded" @click="$refs['product-{{ $product->id }}'].$emit('toggle')">Close</button>
                        </div>
                    </div>
                </template>
            </modal>
        @empty
        @endforelse
        </div>
        @empty
        @endforelse
    <float-cart></float-cart>
@endsection
