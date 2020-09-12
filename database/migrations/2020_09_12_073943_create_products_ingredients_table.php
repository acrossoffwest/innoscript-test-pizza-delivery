<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_ingredients', function (Blueprint $table) {
            $table->id();

            $table->boolean('is_default')->default(true);
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('ingredient_id')->constrained()->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products_ingredients');
    }
}
