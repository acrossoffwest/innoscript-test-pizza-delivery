<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Services\ImageService;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Tests\Unit\ImageServiceTest;

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
        $this->addPizzas($faker);
        $this->addDrinks($faker);
    }



    private function addPizzas(Generator $faker)
    {
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

        $imageService = new ImageService();
        foreach ($pizzaNames as $index => $pizzaName) {
            $id = $index + 1;
            $image = $imageService->getImageModelGeneratedRandomly();
            $this->insertNewProduct($id, [
                'is_available' => true,
                'name' => $pizzaName,
                'slug' => Str::slug($pizzaName),
                'type_id' => 1,
                'category_id' => rand(1, 3),
                'description' => $pizzaName.' is pizza. '.$faker->text,
                'weight' => floatval(rand(0, 1).'.'.rand(0, 10)),
                'cost' => rand(3, 25),
                'image_id' => $image->id
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
                    'cost' => rand(3, 25)
                ],
                [
                    'product_option_id' => 1,
                    'is_default' => false,
                    'value' => 50,
                    'weight' => floatval(rand(0, 1).'.'.rand(0, 10)),
                    'cost' => rand(3, 25)
                ],
                [
                    'product_option_id' => 2,
                    'is_default' => true,
                    'weight' => 0,
                    'value' => 'Тонкое',
                    'cost' => 0
                ],
                [
                    'product_option_id' => 2,
                    'is_default' => false,
                    'weight' => floatval(rand(0, 1).'.'.rand(0,9)),
                    'value' => 'Толстое',
                    'cost' => rand(1, 3)
                ]
            ]);
        }
    }

    private function addDrinks(Generator $faker)
    {
        $names = [
            'Drink 1',
            'Drink 2',
            'Drink 3',
            'Drink 4'
        ];

        $imageService = new ImageService();
        $id = Product::query()->count();
        foreach ($names as $index => $name) {
            ++$id;
            $image = $imageService->getImageModelGeneratedRandomly('drinks');
            $this->insertNewProduct($id, [
                'is_available' => true,
                'name' => $name,
                'slug' => Str::slug($name),
                'type_id' => 2,
                'category_id' => rand(4, 5),
                'description' => $name.' is drink. '.$faker->text,
                'weight' => floatval(rand(0, 1).'.'.rand(0, 10)),
                'cost' => rand(3, 25),
                'image_id' => $image->id
            ], [], [
                [
                    'product_option_id' => 3,
                    'is_default' => true,
                    'value' => 0.5,
                    'weight' => 0.5,
                    'cost' => 0
                ],
                [
                    'product_option_id' => 3,
                    'is_default' => false,
                    'value' => 1,
                    'weight' => 1,
                    'cost' => 0
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
                'product_id' => $id,
                'ingredient_id' => $ingredientId,
                'is_default' => $isDefault
            ]);
        }
        foreach ($options as $option) {
            DB::table('products_product_options')->insert(array_merge(['product_id' => $id], $option));
        }
    }
}
