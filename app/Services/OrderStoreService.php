<?php


namespace App\Services;


use App\Mail\SendOrderAcception;
use App\Mail\SendOrderCreated;
use App\Mail\SendRegistrationInformation;
use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Ramsey\Uuid\Uuid;

class OrderStoreService
{
    protected OrderItemStoreService $itemStore;

    public function __construct(OrderItemStoreService $itemStore)
    {
        $this->itemStore = $itemStore;
    }

    /**
     * @param User $user
     * @param array $items
     * @param string $note
     * @param string $currency
     * @return Order
     */
    public function process(User $user, array $items, string $note = '', string $currency = 'euro'): Order
    {
        /** @var Order $order */
        $order = Order::query()->create([
            'phone' => $user->phone,
            'status' => 'created',
            'note' => $note,
            'delivery_cost' => config('pizza-settings.delivery_cost'),
            'total_cost' => 0,
            'currency' => $currency,
            'user_id' => $user->id,
            'token' => Uuid::uuid4()->toString()
        ]);
        Mail::to($user)->send(new SendOrderCreated($order->status_link));
        return $this->updateTotalCost($this->itemStore->process($order, $items));
    }

    protected function updateTotalCost(Order $order)
    {
        $order->fill([
            'total_cost' => $order->items->map(fn($orderItem) => $orderItem->cost * $orderItem->count)->sum() + ceil($order->delivery_cost * config('pizza-settings.currencies.'.$order->currency))
        ])->save();
        return $order;
    }
}
