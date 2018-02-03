import React from 'react'
import App from '../containers/App'
const routes = [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/index',
        exact: true,
        render: () => <div>index Page</div>
    }
]

export default routes