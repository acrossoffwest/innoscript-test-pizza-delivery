<!-- This example requires Tailwind CSS v1.4.0+ -->
<div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="">
                <a href="/" class="flex">
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow">
                </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button" @click="showMobileMenu = !showMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <nav class="hidden md:flex space-x-10">
                @if(auth()->check())
                    @if(auth()->check() && auth()->user()->hasRole('admin'))
                        <a href="{{ route('admin.types.index') }}" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Types
                        </a>
                        <a href="{{ route('admin.categories.index') }}" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Categories
                        </a>
                        <a href="{{ route('admin.ingredients.index') }}" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Ingredients
                        </a>
                        <a href="{{ route('admin.product_options.index') }}" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Product options
                        </a>
                        <a href="{{ route('admin.products.index') }}" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            Products
                        </a>
                    @endif
                    <a href="/home" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                        My orders
                    </a>
                @endif
            </nav>
            <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                <span>Currency:</span>
                <a href="#" @click.prevent="setCurrency('dollar')" :class="$store.getters.currentCurrency === 'dollar' ? 'text-gray-900' : ''" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                    $
                </a>
                <a href="#" @click.prevent="setCurrency('euro')" :class="$store.getters.currentCurrency === 'euro' ? 'text-gray-900' : ''" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                    €
                </a>
                <a v-if="cartItemsCount" href="{{ route('cart') }}" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                    Cart <span class="p-2 bg-gray-200 rounded" v-html="`${cartItemsCount}`"></span>
                </a>
                @guest
                    <a href="{{ route('login') }}" class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                        {{ __('Login') }}
                    </a>
                @else
                    <a href="{{ route('logout') }}" class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                @endguest


            </div>
        </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-if="showMobileMenu">
        <div class="rounded-lg shadow-lg">
            <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                <div class="pt-5 pb-6 px-5 space-y-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow">
                        </div>
                        <div class="-mr-2">
                            <button type="button" @click="showMobileMenu = !showMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <nav class="grid row-gap-8">
                            @if(auth()->check())
                                @if(auth()->check() && auth()->user()->hasRole('admin'))
                                    <a href="{{ route('admin.types.index') }}" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <div class="text-base leading-6 font-medium text-gray-900">
                                            Types
                                        </div>
                                    </a>
                                    <a href="{{ route('admin.categories.index') }}" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <div class="text-base leading-6 font-medium text-gray-900">
                                            Categories
                                        </div>
                                    </a>
                                    <a href="{{ route('admin.ingredients.index') }}" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <div class="text-base leading-6 font-medium text-gray-900">
                                            Ingredients
                                        </div>
                                    </a>
                                    <a href="{{ route('admin.product_options.index') }}" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <div class="text-base leading-6 font-medium text-gray-900">
                                            Product options
                                        </div>
                                    </a>
                                    <a href="{{ route('admin.products.index') }}" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                        <div class="text-base leading-6 font-medium text-gray-900">
                                            Products
                                        </div>
                                    </a>
                                @endif
                                <a href="{{ route('admin.products.index') }}" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                                    <div class="text-base leading-6 font-medium text-gray-900">
                                        Orders
                                    </div>
                                </a>
                            @endif
                            <a href="{{ route('cart') }}" class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                Cart
                            </a>
                        </nav>
                    </div>
                </div>
                <div class="py-6 px-5 space-y-6">
                    <div class="space-y-6">
                        @guest
                            <span class="w-full flex rounded-md shadow-sm">
                              <a href="{{ route('login') }}" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                {{ __('Login') }}
                              </a>
                            </span>
                            @if (Route::has('register'))
                                <span class="inline-flex rounded-md shadow-sm">
                                  <a href="{{ route('register') }}" class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                    {{ __('Register') }}
                                  </a>
                                </span>
                            @endif
                        @else
                            <span>{{ Auth::user()->name }} </span>
                            <a href="" class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">

                            </a>
                            <span class="w-full flex rounded-md shadow-sm">
                              <a href="{{ route('logout') }}" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                              </a>
                            </span>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        @endguest
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
