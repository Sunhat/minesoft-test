import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import { PageProps } from '@/types';
import React, {useCallback} from "react";
import TodoListTable from "@/Components/TodoList/TodoListTable/TodoListTable";
import {TodoList} from "@/types/todos";

type Props = {
    todo_lists: TodoList[]
}

export default function Index({ auth, todo_lists }: PageProps<Props>) {


    const deleteList = useCallback((id: number) => {
        router.delete(route('todo-lists.destroy', { todo_list: id }))
    }, [])


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Todo Lists</h2>}
        >
            <Head title="Todo Lists" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="pb-6">
                        <Link href={route('todo-lists.create')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="text-gray-900 dark:text-gray-100">
                            {todo_lists.length === 0 ? 'Click create to make a new todo list' : <TodoListTable todo_lists={todo_lists} deleteList={deleteList} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
