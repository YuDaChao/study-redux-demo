import React from 'react'
import Loadable from 'react-loadable'
// import Bundle from '../components/Bundle'
import App from '../containers/App'
import Loading from '../components/Loading'
// import Test from '../components/Test'



const AsyncTest = Loadable({
    loader: () => import('../components/Test'),
    loading: Loading
})

const AsyncHome = Loadable({
    loader: () => import('../components/Home'),
    loading: Loading
})


const routes = [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/index',
        component: AsyncTest
    },
    {
        path: '/home',
        component: AsyncHome
    },
    {
        path: 'empty',
        component: null
    }
]

// 说明
// empty Route
// https://github.com/ReactTraining/react-router/issues/1982  解决人：PFight
// 解决react-router v4改变查询参数并不会刷新或者说重载组件的问题

export default routes