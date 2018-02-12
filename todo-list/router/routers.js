import React from 'react'
import Bundle from '../components/Bundle'
import App from '../containers/App'
// import Test from '../components/Test'


const Test = (props) => (
    <Bundle load={() => import('../components/Test')}>
        { (Test) => <Test {...props} /> }
    </Bundle>
)

const Home = (props) => (
    <Bundle load={() => import('../components/Home')}>
        { (Home) => <Home {...props} /> }
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
        component: Test
    },
    {
        path: '/home',
        component: Home
    }
]

export default routes