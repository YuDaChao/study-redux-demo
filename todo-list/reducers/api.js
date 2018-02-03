const api = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.response
            }
        default:
            return state
    }
}

export default api