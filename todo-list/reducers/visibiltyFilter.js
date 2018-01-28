import {
    visibilityFilter,
    SET_VISIBILITY_FILTER
} from '../actions'


const visibilityFilterReducer = (state = visibilityFilter.SHOW_ALL, action ) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilterReducer