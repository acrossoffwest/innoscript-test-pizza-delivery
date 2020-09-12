<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsProductOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_product_options', function (Blueprint $table) {
            $table->id();

            $table->boolean('is_default')->default(true);
            $table->string('value')->nullable();
            $table->float('weight')->default(0);
            $table->float('cost')->default(0);

            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_option_id')->constrained()->cascadeOnDelete();

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
        Schema::dropIfExists('products_product_options');
    }
}
