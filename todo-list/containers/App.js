import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    addTodo,
    completeTodo,
    setVisibilityFilter,
    visibilityFilter,
    loadPosts
} from '../actions'

import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import Footer from '../components/Footer'
import { visibleTodosSelector } from '../selector/todoSelector'
class App extends React.Component {
    componentDidMount() {
        this.props.onLoadPost()
    }
    render() {
        const {
            visibleTodos,
            visibilityFilter,
            addTodo,
            onTodoClick,
            onChangeFilter,
        } = this.props
        return [
            <AddTodo key="addTodo" addTodo={addTodo} />,
            <TodoList key="todoList" todos={visibleTodos} onClick={onTodoClick} />,
            <Footer key="footer" onChangeFilter={onChangeFilter} filter={visibilityFilter} />
        ]
    }
}

App.propTypes = {
   visibleTodos: PropTypes.arrayOf(PropTypes.shape({
       text: PropTypes.string.isRequired,
       completed: PropTypes.bool.isRequired,
   }).isRequired).isRequired,
   visibilityFilter: PropTypes.oneOf([
       'SHOW_ALL',
       'SHOW_COMPLETED',
       'SHOW_ACTIVE'
   ]).isRequired
}

const selectTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilter.SHOW_ALL:
            return todos
        case visibilityFilter.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case visibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    addTodo: addTodo,
    onTodoClick: completeTodo,
    onChangeFilter: setVisibilityFilter,
    onLoadPost: loadPosts
}, dispatch))

export default connect(visibleTodosSelector, mapDispatchToProps)(App)