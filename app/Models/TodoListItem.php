<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TodoListItem extends Model
{
    use HasFactory;

    protected $fillable = [
      'name',
      'created_at',
      'updated_at',
    ];

    public function todoList(): BelongsTo
    {
        return $this->belongsTo(TodoList::class);
    }
}
