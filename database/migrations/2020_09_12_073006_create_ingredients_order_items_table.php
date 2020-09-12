<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients_order_items', function (Blueprint $table) {
            $table->id();

            $table->integer("count")->default(1);
            $table->float("weight");
            $table->float("cost");

            $table->foreignId("order_item_id")->nullable()->constrained();
            $table->foreignId("ingredient_id")->nullable()->constrained();

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
        Schema::dropIfExists('ingredients_order_items');
    }
}
