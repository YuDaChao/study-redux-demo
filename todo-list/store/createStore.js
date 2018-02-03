import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux'

import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux'

import reduxThunk from 'redux-thunk'
import callAPIMiddleware from '../middlewares/createAction'

function createAppStore(history, reducers, initialState = {}) {
    let composeEnhancers = compose

    if (typeof window !== 'undefined') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }

    const routeMiddleware = routerMiddleware(history)

    const middlewares = [
        routeMiddleware,
        reduxThunk,
        callAPIMiddleware
    ]

    const store = createStore(
        combineReducers({
            ...reducers,
            router: routeMiddleware,
        }),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    )

    return {
        store,
        history
    }
}

export default createAppStore