// action types
export const ADD_TODO = 'ADD_TODO' // 添加一个待办项
export const COMPLETED_TODO = 'COMPLETED_TODO' // 完成一个待办项
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' // 显示待办项的类型


export const visibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let id = 1

export const addTodo = (text) => ({
    type: ADD_TODO,
    text,
    id: id++
})

export const completeTodo = (id) => ({
    type: COMPLETED_TODO,
    id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})