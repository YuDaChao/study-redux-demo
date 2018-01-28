import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import rootReducers from './reducers'

const store = createStore(rootReducers)

const rootEl = document.getElementById('root')

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)