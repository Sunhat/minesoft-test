import {TodoList} from "@/types/todos";
import {FormEvent, useCallback} from "react";
import {Link} from "@inertiajs/react";


type TodoListRowProps = {
    list: TodoList
    remove: (id: number) => void
}

export default function TodoListRow({ list: { name, id}, remove }: TodoListRowProps) {
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        remove(id)
    }, [])

    return <tr>
        <td>{id}</td>
        <td className={'w-full'}>{name}</td>
        <td className={'px-2'}>
            <Link className="hover:bg-gray-200 font-bold py-2 px-4 rounded" href={route('todo-lists.show', { id })}>View</Link>
        </td>
        <td className={'px-2'}>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 block rounded">Delete</button>
            </form>
        </td>
    </tr>
}
