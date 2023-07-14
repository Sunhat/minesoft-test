<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoList\TodoListStoreRequest;
use App\Http\Requests\TodoList\TodoListUpdateRequest;
use App\Models\TodoList;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class TodoListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        /** @var User $user */
        $user = auth()->user();

        return Inertia::render('TodoList/Index/Index', [
            'todo_lists' => $user->todoLists,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('TodoList/Create/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TodoListStoreRequest $request): \Illuminate\Http\RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $user->todoLists()->create($request->validated());

        return redirect()->route('todo-lists.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        /** @var User $user */
        $user = auth()->user();

        return Inertia::render('TodoList/Show/Show', [
            'todo_list' => $user->todoLists()->with('items')->findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        /** @var User $user */
        $user = auth()->user();

        return Inertia::render('TodoList/Edit/Edit', [
            'todo_list' => $user->todoLists()->findOrFail($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TodoListUpdateRequest $request, string $id): RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $list = $user->todoLists()->findOrFail($id);
        $list->update($request->validated());

        return redirect()->route('todo-lists.show', [
            'todo_list' => $id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): \Illuminate\Http\RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $user->todoLists()->where('id', $id)->delete();

        return redirect()->route('todo-lists.index');
    }
}

