import { combineReducers } from 'redux'
import visibilityFilterReducer from './visibiltyFilter'
import todos from './todos'

export default combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todos
})