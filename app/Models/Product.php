<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'products_ingredients')
            ->withPivot(['is_default']);
    }

    public function defaultIngredients()
    {
        return $this->ingredients()->where('is_default', true);
    }

    public function extraIngredients()
    {
        return $this->ingredients()->where('is_default', false);
    }

    public function options()
    {
        return $this->belongsToMany(ProductOption::class, 'products_product_options')
            ->withPivot([
                'is_default',
                'value',
                'weight',
                'cost',
            ]);
    }
}
