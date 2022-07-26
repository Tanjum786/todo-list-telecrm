export const todoReducer = (todoState, todoAction) => {
    const {
        TodoList
    } = todoState
    const {
        payload,
        type
    } = todoAction
    switch (type) {
        case "ADD-TO-TODO":
            return {
                ...todoState,
                TodoList: [...TodoList, payload]
            }

            case "DELETE-TODO":
                const FilterDeletedTodo = TodoList.filter((todo) => todo.id !== payload.id)
                return {
                    ...todoState,
                    TodoList: FilterDeletedTodo
                }

                case "EDIT-TODO":
                    const findInexOfEditedTodo = TodoList.findIndex((todo) => todo.id === payload.id)
                    let EditedTodoList = [...TodoList]
                    EditedTodoList[findInexOfEditedTodo] = payload

                    return {
                        ...todoState,
                        TodoList: EditedTodoList
                    }

                    default:
                        return todoState

    }
};