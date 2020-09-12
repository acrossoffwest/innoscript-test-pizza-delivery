<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->boolean("is_available")->default(true);
            $table->string("name");
            $table->string("slug")->unique();
            $table->string("description");
            $table->float("weight");
            $table->float("cost");

            $table->foreignId('category_id')->nullable()->constrained();
            $table->foreignId('type_id')->nullable()->constrained();
            $table->foreignId('image_id')->nullable()->constrained();

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
        Schema::dropIfExists('products');
    }
}
