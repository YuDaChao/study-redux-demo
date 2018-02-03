import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import reduxThunk from 'redux-thunk'
import callAPIMiddleware from '../middlewares/createAction'

function createAppStore(history, reducers, initialState = {}) {
    let composeEnhancers = compose

    if (typeof window !== 'undefined') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }

    const middlewares = [
        reduxThunk,
        callAPIMiddleware
    ]

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    )

    return {
        store,
        history
    }
}

export default createAppStore