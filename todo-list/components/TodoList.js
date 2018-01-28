import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

export default class TodoList extends React.Component {
    render() {
        const { todos, onClick } = this.props
        return (
            <ul>
                {
                    todos.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onClick={() => {onClick(todo.id)}}
                        />
                    ))
                }
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    onClick: PropTypes.func.isRequired
}