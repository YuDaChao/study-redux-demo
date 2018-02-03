import { combineReducers } from 'redux'
import visibilityFilterReducer from './visibiltyFilter'
import todos from './todos'
import api from './api'

export default combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todosReducers: todos,
    api
})