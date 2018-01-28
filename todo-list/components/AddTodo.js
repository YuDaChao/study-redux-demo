import React from 'react'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {

    handleAddTodo = () => {
        const value = this.textInput.value
        this.props.addTodo(value)
        this.textInput.value = ''
    }

    render() {
        return [
            <input
                key="input"
                ref={input => {this.textInput = input}}
            />,
            <button
                key="btn"
                onClick={this.handleAddTodo}
            >
                add
            </button>
        ]
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo


