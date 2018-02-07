import React from 'react'
// import PropTypes from 'prop-types'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import { ConnectedRouter } from 'react-router-redux'
import map from 'lodash/map'
import routes from './routers'

const RouterMap = () => (
    <BrowserRouter>
        <Switch>
            {
                map(routes, (route, idx) => (
                    <Route key={idx} {...route} />
                ))
            }
        </Switch>
    </BrowserRouter>
)

// RouterMap.propTypes = {
//     history: PropTypes.object.isRequired
// }

export default RouterMap