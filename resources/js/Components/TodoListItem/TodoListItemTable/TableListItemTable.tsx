import {TodoListItem} from "@/types/todos";
import TodoListItemRow from "@/Components/TodoListItem/TodoListItemRow/TodoListItemRow";
import TodoListItemCreateRow from "@/Components/TodoListItem/TodoListItemCreateRow/TodoListItemCreateRow";


type TodoListItemsTableProps = {
    todos: TodoListItem[]
    id: number
    updateCompleted: (id: number, completed: boolean) => void
    destroyItem: (id: number) => void
}

export default function TodoListItemTable ({todos, updateCompleted, destroyItem, id}: TodoListItemsTableProps) {
    return <table className="w-full">
        <tbody>
        {todos.map(todo => <TodoListItemRow todo={todo} key={todo.id} updateCompleted={updateCompleted} destroy={destroyItem} />)}
        <TodoListItemCreateRow todo_list_id={id} />
        </tbody>
    </table>
}
