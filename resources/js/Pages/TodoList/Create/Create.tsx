import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import { PageProps } from '@/types';
import {FormEvent, useState} from "react";


export default function Create({ auth }: PageProps) {

    const [values, setValues] = useState({
        name: ''
    })

    function handleChange(e: FormEvent<HTMLInputElement>) {
        const key = e.currentTarget.id
        const value = e.currentTarget.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        router.post('/todo-lists', values)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">New Todo List</h2>}
        >
            <Head title="Todo Lists" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="text-gray-900 dark:text-gray-100">

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Name:</label>
                                <input id="name" value={values.name} onChange={handleChange} />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
