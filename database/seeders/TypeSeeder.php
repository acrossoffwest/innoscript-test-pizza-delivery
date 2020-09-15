<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->insert([
            'id' => 1,
            'name' => 'Pizza',
            'slug' => 'pizza',
            'unit' => 'кг'
        ]);
        DB::table('types')->insert([
            'id' => 2,
            'name' => 'Drink',
            'slug' => 'drink',
            'unit' => 'л'
        ]);
    }
}
