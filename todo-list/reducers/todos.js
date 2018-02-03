import createReducer from '../middlewares/createReducer'
import {
    ADD_TODO,
    COMPLETED_TODO,
} from '../actions'

const defaultState = () => ({
    todos: []
})

const addTodos = (state, action) => {
    return Object.assign({}, state, {
        todos: [
            ...state.todos,
            {
            text: action.text,
            id: action.id,
            completed: false
        }]
    })
}

const completedTodo = (state, action) => {
    const todos = state.todos.map(todo =>
        todo.id === action.id ?
            {...todo, completed: !todo.completed} :
            todo
    )
    return Object.assign({}, state, {todos: todos})
}

export default createReducer(defaultState, {
    ADD_TODO: addTodos,
    COMPLETED_TODO: completedTodo
})

// const todos = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     id: action.id,
//                     completed: false
//                 }
//             ]
//         case COMPLETED_TODO:
//             return state.map(todo =>
//                 (todo.id === action.id)
//                     ? {...todo, completed: !todo.completed}
//                     : todo
//             )
//         default:
//             return state
//     }
// }
//
// export default todos