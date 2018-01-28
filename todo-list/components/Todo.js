import React from 'react'
import PropTypes from 'prop-types'

class Todo extends React.Component {

    render() {
        const { onClick, text, completed } = this.props

        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: completed ? 'default' : 'pointer'
                }}
            >
                {text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo