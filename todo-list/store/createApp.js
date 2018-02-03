import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import RouterMap from '../router/index'


const createApp = (store, history) => (
    <Provider store={store}>
        <RouterMap history={history}/>
    </Provider>
)

export default createApp