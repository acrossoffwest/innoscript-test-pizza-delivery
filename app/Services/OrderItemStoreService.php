<?php


namespace App\Services;


use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;

class OrderItemStoreService
{
    /**
     * @param Order $order
     * @param array $items
     * @return Order
     */
    public function process(Order $order, array $items): Order
    {
        foreach ($items as $productId => $productsCount) {
            $product = Product::query()->findOrFail($productId);
            OrderItem::query()->create([
                'product_id' => $product->id,
                'order_id' => $order->id,
                'count' => $productsCount,
                'cost' => ceil($product->cost * config('pizza-settings.currencies.'.$order->currency)),
                'weight' => $product->weight
            ]);
        }
        return $order->fresh(['items', 'items.product.image']);
    }
}
