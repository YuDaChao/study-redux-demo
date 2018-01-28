import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ counter, increment, decrement, incrementIfOdd, incrementAsync}) => (
	<p>
		Clicked: {counter} times
		{'  '}
		<button onClick={increment}>+</button>
		{'  '}
		<button onClick={decrement}>-</button>
		{'  '}
		<button onClick={incrementIfOdd}>increment if odd</button>
		{'  '}
		<button onClick={incrementAsync}>increment async</button>
	</p>
)

Counter.propTypes = {
	counter: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,
}

export default Counter