import {
    ADD_TODO,
    COMPLETED_TODO,
} from '../actions'

const todos = (state = [], action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    completed: false
                }
            ]
        case COMPLETED_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case 'LOAD_POSTS_SUCCESS':
            return { api: {...state} }
        default:
            return state
    }
}

export default todos