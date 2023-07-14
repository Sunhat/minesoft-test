import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import { PageProps } from '@/types';
import {TodoList, TodoListItem} from "@/types/todos";
import {FormEvent, useCallback, useState} from "react";
import TodoListItemTable from "@/Components/TodoListItem/TodoListItemTable/TableListItemTable";

type Props = {
    todo_list: TodoList
}



export default function Show({ auth, todo_list: { id, name, items } }: PageProps<Props>) {

    const updateCompleted = useCallback((item_id: number, completed: boolean) => {
        router.patch(route('todo-list-items.update', {
            todo_list: id,
            item: item_id,
        }), { completed })
    }, [id])

    const destroyItem = useCallback((item_id: number) => {
        router.delete(route('todo-list-items.destroy', {
            todo_list: id,
            item: item_id,
        }))
    }, [id])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Todo List: {name}
                <Link className="mx-6 text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" href={route('todo-lists.edit', { id })}>Edit</Link>

            </h2>}
        >
            <Head title={"Todo List: "+name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="text-gray-900 dark:text-gray-100">
                            <TodoListItemTable todos={items} id={id} updateCompleted={updateCompleted} destroyItem={destroyItem} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
