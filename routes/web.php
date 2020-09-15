<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', \App\Http\Controllers\HomeController::class);
Route::get('/cart', \App\Http\Controllers\CartController::class)->name('cart');
Route::get('/orders/{token}/status', [\App\Http\Controllers\OrderController::class, 'status'])->name('orders.status');

Route::get('/home', [App\Http\Controllers\DashboardController::class, 'index'])->name('home');

Route::middleware('auth:web')
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::resources([
            'types' => App\Http\Controllers\Admin\TypeController::class,
            'categories' => App\Http\Controllers\Admin\CategoryController::class,
            'ingredients' => App\Http\Controllers\Admin\IngredientController::class,
            'product_options' => App\Http\Controllers\Admin\ProductOptionController::class,
            'products' => App\Http\Controllers\Admin\ProductController::class,
        ]);
        Route::get('types/{type}/categories', [\App\Http\Controllers\Admin\TypeController::class, 'indexCategories'])
            ->name('types.categories.index');
        Route::get('types/{type}/options', [\App\Http\Controllers\Admin\TypeController::class, 'indexOptions'])
            ->name('types.product_options.index');
    });
