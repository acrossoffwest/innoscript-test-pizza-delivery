<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Order
 * @package App\Models
 * @property Collection $items
 */
class Order extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $appends = [
        'status_link'
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function user()
    {
        return $this->hasMany(User::class);
    }

    public function getStatusLinkAttribute()
    {
        return $this->token ? route('orders.status', ['token' => $this->token]) : '';
    }
}
