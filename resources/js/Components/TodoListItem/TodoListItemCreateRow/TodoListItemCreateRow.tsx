import {TodoListItem} from "@/types/todos";
import {FormEvent, useCallback, useState} from "react";
import {router} from "@inertiajs/react";


type TodoListItemCreateRowProps = {
    todo_list_id: number,
}




const initialForm = {
    name: '',
}
export default function TodoListItemCreateRow ({ todo_list_id }: TodoListItemCreateRowProps) {

    const [form, setForm] = useState(initialForm)

    const resetForm = useCallback(() => {
        setForm(initialForm)
    }, [])

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            (document.activeElement as HTMLElement).blur();
        } catch {}
        router.post(route('todo-list-items.store', {...form, todo_list: todo_list_id}), {}, {
            onFinish: resetForm
        })
    }, [form])

    const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const key = e.currentTarget.id
        setForm({
            ...form,
            [key]: value,
        })
    }, [form])

    return <tr>
        <td colSpan={2}>
            <form onSubmit={handleSubmit}>
                <input type="text" className="w-full block" id="name" value={form.name} onChange={handleChange} placeholder={'Add new todo... e.g. Make the bread!'} />
                <input type="submit" value="Add" />
            </form>
        </td>
    </tr>
}
