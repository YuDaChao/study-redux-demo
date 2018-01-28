export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"


export const increment = () => ({
	type: "INCREMENT"
})

export const decrement = () => ({
	type: 'DECREMENT'
})

export const incrementIfOdd = () => {
    return (dispatch, getState) => {
        const { counter } = getState()
        if (counter % 2 === 0) {
            dispatch(increment())
        }
    }
}

export const incrementAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment())
        }, 1000)
    }
}


