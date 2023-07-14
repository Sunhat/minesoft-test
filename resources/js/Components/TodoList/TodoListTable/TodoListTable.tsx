import TodoListRow from "@/Components/TodoList/TodoListRow/TodoListRow";
import {TodoList} from "@/types/todos";

type TodoListTableProps = {
    todo_lists: TodoList[]
    deleteList: (id: number) => void
}


export default function TodoListTable({ todo_lists, deleteList }: TodoListTableProps) {
    return <table>
        <tbody>
        {todo_lists.map(list => (<TodoListRow key={list.id} list={list} remove={deleteList} />))}
        </tbody>
    </table>
}
