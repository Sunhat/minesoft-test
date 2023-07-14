import {FormEvent, useState} from "react";
import {TodoListItem} from "@/types/todos";

type TodoListItemRowProps = {
    todo: TodoListItem
    update: (id: number, data: object) => void
    destroy: (id: number) => void
}
export default function TodoListItemRow ({ todo: { id, name, completed }, update, destroy }: TodoListItemRowProps) {

    const [newName, setNewName] = useState<string>(name);

    const [isFocused, setIsFocused] = useState(false)

    function handleChangeCompleted(e: FormEvent<HTMLInputElement>) {
        update(id, { completed: !completed})
    }

    function handleDelete(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        destroy(id)
    }
    function handleUpdateName(e: FormEvent<HTMLFormElement>) {
        update(id, { name: newName })
    }

    const onChangeName = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setNewName(value)
    }

    function onFocus () {
        setIsFocused(true)
    }
    function onBlur () {
        setIsFocused(false)
    }

    return <tr className={'my-1'}>
        <td><input type="checkbox" checked={completed} onChange={handleChangeCompleted} /></td>
        <td className="w-full px-2">
            <form onSubmit={handleUpdateName}>
                <input type="text" value={newName} onChange={onChangeName} onFocus={onFocus} onBlur={onBlur} className="shadow appearance-none border-none rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {isFocused || newName !== name ? <input type="submit" value="Save" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded" /> : null}
            </form>
        </td>
        <td className={'px-2'}>
            <form onSubmit={handleDelete}>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 block rounded">Delete</button>
            </form>
        </td>
    </tr>
}
