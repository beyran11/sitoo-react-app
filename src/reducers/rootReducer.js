const initState = {
    todos: []
}

const rootReducer = (state = initState,action) => {

    switch (action.type) {
        case 'ADD_POST':
        {
            const newTodos = [...state.todos,action.todo]
            return {
                ...state,
                todos: newTodos
            }
        }
        case 'DELETE_POST':
        {
            const newTodos = state.todos.filter(todo => action.id !== todo.id)
            return {
                ...state,
                todos: newTodos
            }
        }
        case 'DELETE_POSTS':
        {
            const newTodos = state.todos.filter(todo => todo.checked !== true)
            return {
                ...state,
                todos: newTodos
            }
        }
        default:
            return state;
    }
}

export default rootReducer;