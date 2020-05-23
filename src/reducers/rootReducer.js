const initState = {
    todos: []
}

const rootReducer = (state = initState,action) => {

    if (action.type === 'ADD_POST') {
        let newTodos = [...state.todos,action.todo]
        return {
            ...state,
            todos: newTodos
        }
    }

    if (action.type === 'DELETE_POST') {
        let newTodos = state.todos.filter(todo => {
            return action.id !== todo.id
        })
        return {
            ...state,
            todos: newTodos
        }
    }

    if (action.type === 'DELETE_POSTS') {
        let newTodos = state.todos.filter(todo => {
            return todo.checked !== true
        })
        return {
            ...state,
            todos: newTodos
        }
    }
    return state;
}

export default rootReducer;