import { createSelector } from 'reselect'
import { visibilityFilter } from '../actions'

function selectTodos(todos, filter) {
    switch (filter) {
        case visibilityFilter.SHOW_ALL:
            return todos
        case visibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case visibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
    }
}

const visibilityFilterSelector = (state) => state.visibilityFilter

const todosSelector = (state) => state.todosReducers.todos

const postsSelector = (state) => state.api.posts

export const visibleTodosSelector = createSelector(
    [visibilityFilterSelector, todosSelector, postsSelector],
    (visibilityFilter, todos, posts) => {
        console.log('todos: ',todos)
        return {
            visibleTodos: selectTodos(todos, visibilityFilter),
            visibilityFilter,
            posts
        }
    }
)