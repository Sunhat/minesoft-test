<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoListItemStoreRequest;
use App\Models\TodoList;
use App\Models\TodoListItem;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoListItemController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoListItemStoreRequest $request, string $todo_list_id): RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        /** @var TodoList $list */
        $list = $user->todoLists()->findOrFail($todo_list_id);

        $list->items()->create([
           ...$request->validated(),
        ]);

        return redirect()->route('todo-lists.show', [
            'todo_list' => $todo_list_id,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $todo_list_id, string $item_id): RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $updated = TodoListItem::query()
            ->where('id', $item_id)
            ->whereHas('todoList', function ($query) use ($todo_list_id, $user) {
                $query->where('id', $todo_list_id);
                $query->where('user_id', $user->id);
            })->update($request->only(['completed', 'name']));

        if (!$updated) {
            throw new ModelNotFoundException;
        }

        return redirect()->route('todo-lists.show', [
            'todo_list' => $todo_list_id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $todo_list_id, string $item_id): RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $deleted = TodoListItem::query()
            ->where('id', $item_id)
            ->whereHas('todoList', function ($query) use ($todo_list_id, $user) {
                $query->where('id', $todo_list_id);
                $query->where('user_id', $user->id);
            })->delete();

        if (!$deleted) {
            throw new ModelNotFoundException;
        }

        return redirect()->route('todo-lists.show', [
            'todo_list' => $todo_list_id,
        ]);
    }
}
