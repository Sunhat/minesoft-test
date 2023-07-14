import {FormEvent} from "react";
import {TodoListItem} from "@/types/todos";

type TodoListItemRowProps = {
    todo: TodoListItem
    updateCompleted: (id: number, completed: boolean) => void
    destroy: (id: number) => void
}
export default function TodoListItemRow ({ todo: { id, name, completed }, updateCompleted, destroy }: TodoListItemRowProps) {

    function handleChangeCompleted(e: FormEvent<HTMLInputElement>) {
        updateCompleted(id, !completed)
    }

    function handleDelete(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        destroy(id)
    }

    return <tr className={'my-1'}>
        <td><input type="checkbox" checked={completed} onChange={handleChangeCompleted} /></td>
        <td className="w-full">{name}</td>
        <td className={'px-2'}>
            <form onSubmit={handleDelete}>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 block rounded">Delete</button>
            </form>
        </td>
    </tr>
}
