import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import App from './containers/Counter'

const store = createStore(rootReducers, applyMiddleware(thunk))

const rootEl = document.getElementById('root')

const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        rootEl
    )
}

render(App)

if (module.hot) {
    module.hot.accept()
}
