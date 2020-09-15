<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConfirmOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'items' => 'required|array',
            'items.*' => 'required|integer',
            'note' => 'nullable|string',
            'contact_info' => 'required',
            'contact_info.name' => 'required|string',
            'contact_info.phone' => 'required|string',
            'contact_info.email' => 'required|email',
            'contact_info.address' => 'required|string'
        ];
    }
}
