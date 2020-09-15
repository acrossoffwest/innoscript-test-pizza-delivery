<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ConfirmOrderRequest;
use App\Http\Resources\OrderResource;
use App\Services\OrderStoreService;
use App\Services\UserStoreService;

class OrderController extends Controller
{
    protected UserStoreService $userStore;
    protected OrderStoreService $orderStore;

    public function __construct(UserStoreService $userStore, OrderStoreService $orderStore)
    {
        $this->userStore = $userStore;
        $this->orderStore = $orderStore;
    }

    public function confirm(ConfirmOrderRequest $request)
    {
        [
            'contact_info' => $contactInfo,
            'items' => $items
        ] = $request->validated();

        return new OrderResource($this->orderStore->process($this->userStore->safeStore($contactInfo), $items));
    }
}
