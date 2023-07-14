
export type TodoListItem = {
    id: number
    name: number
    completed: boolean
}

export type TodoList = {
    id: number
    name: string
    items: TodoListItem[]
}
