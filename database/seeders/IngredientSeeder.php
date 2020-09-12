<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = 'ingredients';
        DB::table($table)->insert([
            'id' => 1,
            'name' => 'Сыр Пармезан',
            'slug' => 'cheese_parmesan',
            'weight' => 0.2,
            'remain' => 3,
            'cost' => 50
        ]);
        DB::table($table)->insert([
            'id' => 2,
            'name' => 'Сыр Чедар',
            'slug' => 'cheese_chedar',
            'weight' => 0.15,
            'remain' => 3,
            'cost' => 100
        ]);
        DB::table($table)->insert([
            'id' => 3,
            'name' => 'Копчёная колбаса',
            'slug' => 'smoked_sausage',
            'weight' => 0.3,
            'remain' => 3,
            'cost' => 30
        ]);
        DB::table($table)->insert([
            'id' => 4,
            'name' => 'Соус Барбекю',
            'slug' => 'sauce_barbeq',
            'weight' => 0.23,
            'remain' => 3,
            'cost' => 12
        ]);
        DB::table($table)->insert([
            'id' => 5,
            'name' => 'Соус Чесночный',
            'slug' => 'sauce_garlic',
            'weight' => 0.14,
            'remain' => 3,
            'cost' => 5
        ]);
        DB::table($table)->insert([
            'id' => 6,
            'name' => 'Томат',
            'slug' => 'tomate',
            'weight' => 0.24,
            'remain' => 3,
            'cost' => 5
        ]);
        DB::table($table)->insert([
            'id' => 7,
            'name' => 'Лук',
            'slug' => 'onion',
            'weight' => 0.1,
            'remain' => 3,
            'cost' => 5
        ]);
    }
}
