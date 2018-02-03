import React from 'react'
import ReactDom from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import rootReducers from './reducers'
import createAppStore from './store/createStore'
import createApp from './store/createApp'

const client = createAppStore(createBrowserHistory(), rootReducers)

const app = createApp(client.store, client.history)

const rootEl = document.getElementById('root')


const render = (Component) => {
    ReactDom.render(
        Component,
        rootEl
    )
}

render(app)

if (module.hot) {
    module.hot.accept('./router/index', () => { render(app) })
}