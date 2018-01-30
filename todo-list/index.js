import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'
import rootReducers from './reducers'
import createAppStore from './store/createStore'

const store = createAppStore({}, rootReducers).store

const rootEl = document.getElementById('root')


const render = (Component) => {
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
    module.hot.accept('./containers/App', () => { render(App) })
}