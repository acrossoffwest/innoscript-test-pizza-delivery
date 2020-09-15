<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = 'product_options';
        DB::table($table)->insert([
            'id' => 1,
            'name' => 'Size',
            'slug' => 'size',
            'unit' => 'см',
            'type_id' => 1
        ]);
        DB::table($table)->insert([
            'id' => 2,
            'name' => 'Толщина теста',
            'slug' => 'dough_depth',
            'unit' => '',
            'type_id' => 1
        ]);
        DB::table($table)->insert([
            'id' => 3,
            'name' => 'Объём',
            'slug' => 'volume',
            'unit' => 'л',
            'type_id' => 2
        ]);
    }
}
