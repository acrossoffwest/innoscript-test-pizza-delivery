<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Type extends Model
{
    use HasFactory;

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function options()
    {
        return $this->hasMany(ProductOption::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
