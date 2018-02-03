import React from 'react'
import PropTypes from 'prop-types'
import { Route, Router, Switch } from 'react-router-dom'
// import { ConnectedRouter } from 'react-router-redux'
import map from 'lodash/map'
import routes from './routers'

const RouterMap = props => (
    <Router {...props}>
        <Switch>
            {
                map(routes, (route, idx) => (
                    <Route key={idx} {...route} />
                ))
            }
        </Switch>
    </Router>
)

RouterMap.propTypes = {
    history: PropTypes.object.isRequired
}

export default RouterMap