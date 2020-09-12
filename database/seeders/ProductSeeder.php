<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = app(Generator::class);
        $pizzaNames = [
            'Margherita',
            'Marinara',
            'Quattro Stagioni',
            'Carbonara',
            'Frutti di Mare',
            'Quattro Formaggi',
            'Crudo',
            'Napoletana',
            'Napoli',
            'Pugliese',
            'Montanara',
            'Emiliana',
            'Romana',
            'Fattoria',
            'Schiacciata',
            'Prosciutto',
            'Americana',
            'Prosciutto e Funghi',
            'Braccio di Ferro',
            'Sarda',
            'Tonno',
        ];
        $doughDepths = ['Тонкое', 'Толстое'];

        foreach ($pizzaNames as $index => $pizzaName) {
            $id = $index + 1;
            $this->insertNewProduct($id, [
                'is_available' => true,
                'name' => $pizzaName,
                'slug' => Str::slug($pizzaName),
                'type_id' => 1,
                'category_id' => rand(1, 3),
                'description' => 'Peperoni is pizza',
                'weight' => floatval(rand(0, 1).'.'.rand(0, 10)),
                'cost' => rand(300, 1000)
            ], [
                1 => $faker->boolean,
                2 => $faker->boolean,
                3 => $faker->boolean,
                4 => $faker->boolean,
                6 => $faker->boolean,
                7 => $faker->boolean
            ], [
                [
                    'product_option_id' => 1,
                    'is_default' => true,
                    'value' => 25,
                    'weight' => 0,
                    'cost' => 0
                ],
                [
                    'product_option_id' => 1,
                    'is_default' => false,
                    'value' => 35,
                    'weight' => floatval(rand(0, 1).'.'.rand(0, 10)),
                    'cost' => rand(300, 1000)
                ],
                [
                    'product_option_id' => 1,
                    'is_default' => false,
                    'value' => 50,
                    'weight' => floatval(rand(0, 1).'.'.rand(0, 10)),
                    'cost' => rand(300, 1000)
                ],
                [
                    'product_option_id' => 2,
                    'is_default' => true,
                    'weight' => 0,
                    'value' => $doughDepths[rand(0, 1)],
                    'cost' => 0
                ],
                [
                    'product_option_id' => 2,
                    'is_default' => true,
                    'weight' => 0.4,
                    'value' => $doughDepths[rand(0, 1)],
                    'cost' => rand(50, 300)
                ]
            ]);
        }

    }

    private function insertNewProduct(int $id, array $productData, array $ingredientsIds, array $options)
    {
        $productData['id'] = $id;
        DB::table('products')->insert($productData);
        foreach ($ingredientsIds as $ingredientId => $isDefault) {
            DB::table('products_ingredients')->insert([
                'product_id' => 1,
                'ingredient_id' => $ingredientId,
                'is_default' => $isDefault
            ]);
        }
        foreach ($options as $option) {
            DB::table('products_product_options')->insert(array_merge(['product_id' => $id], $option));
        }
    }
}
