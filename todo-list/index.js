import React from 'react'
import ReactDom from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'


import rootReducers from './reducers'
import createAppStore from './store/createStore'
// import createApp from './store/createApp'

import RouterMap from './router'


const client = createAppStore(createBrowserHistory(), rootReducers)

// const app = createApp(client.store, client.history)

const rootEl = document.getElementById('root')


const render = (Component) => {
    ReactDom.render(
        <AppContainer>
            <Provider store={client.store}>
                <Component />
            </Provider>
        </AppContainer>,
        rootEl
    )
}

render(RouterMap)

if (module.hot) {
    module.hot.accept('./router/index', () => { render(RouterMap) })
}