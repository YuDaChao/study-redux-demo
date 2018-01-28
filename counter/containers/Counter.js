import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from '../components/Counter'

import {
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync
} from '../actions'

class App extends React.Component {

    render() {
        return (
            <Counter
                counter={this.props.counter}
                increment={this.props.increment}
                decrement={this.props.decrement}
                incrementIfOdd={this.props.incrementIfOdd}
                incrementAsync={this.props.incrementAsync}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
    incrementIfOdd: bindActionCreators(incrementIfOdd, dispatch),
    incrementAsync: bindActionCreators(incrementAsync, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)