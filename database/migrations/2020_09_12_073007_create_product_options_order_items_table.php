<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductOptionsOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_options_order_items', function (Blueprint $table) {
            $table->id();

            $table->float("weight");
            $table->float("cost");

            $table->foreignId("order_item_id")->nullable()->constrained();
            $table->foreignId("product_option_id")->nullable()->constrained();

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
        Schema::dropIfExists('product_options_order_items');
    }
}
