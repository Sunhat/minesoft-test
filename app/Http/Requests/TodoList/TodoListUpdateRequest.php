<?php

namespace App\Http\Requests\TodoList;

use Illuminate\Foundation\Http\FormRequest;

class TodoListUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
        ];
    }
}
