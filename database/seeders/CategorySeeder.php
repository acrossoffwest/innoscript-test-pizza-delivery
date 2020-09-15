<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'id' => 1,
            'name' => 'Classic',
            'slug' => 'classic',
            'type_id' => 1
        ]);
        DB::table('categories')->insert([
            'id' => 2,
            'name' => 'Original',
            'slug' => 'original',
            'type_id' => 1
        ]);
        DB::table('categories')->insert([
            'id' => 3,
            'name' => 'Nourishing',
            'slug' => 'nourishing',
            'type_id' => 1
        ]);
        DB::table('categories')->insert([
            'id' => 4,
            'name' => 'Soda',
            'slug' => 'soda',
            'type_id' => 2
        ]);
        DB::table('categories')->insert([
            'id' => 5,
            'name' => 'Juice',
            'slug' => 'juice',
            'type_id' => 2
        ]);
    }
}
