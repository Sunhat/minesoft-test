
export type TodoListItem = {
    id: number
    name: string
    completed: boolean
}

export type TodoList = {
    id: number
    name: string
    items: TodoListItem[]
}
