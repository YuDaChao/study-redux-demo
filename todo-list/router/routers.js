import React from 'react'
import Test from 'bundle-loader?lazy!../components/Test'
import Bundle from '../bundle'
import App from '../containers/App'
// import Test from '../components/Test'


const LoadTest = (props) => (
    <Bundle load={Test}>
        {
            (Test) => <Test {...props} />
        }
    </Bundle>
)

const routes = [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/index',
        exact: true,
        component: LoadTest
    }
]

export default routes