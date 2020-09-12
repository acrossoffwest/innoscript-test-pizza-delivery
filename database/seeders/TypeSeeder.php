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
            'name' => 'Пицца',
            'slug' => 'pizza',
            'unit' => 'гр.'
        ]);
        DB::table('types')->insert([
            'id' => 2,
            'name' => 'Напитки',
            'slug' => 'drinks',
            'unit' => 'л'
        ]);
    }
}
