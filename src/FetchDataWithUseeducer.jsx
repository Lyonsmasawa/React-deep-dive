import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

let initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong',
                post: {}
            }

        default:
            return state
    }
}


const FetchDataWithUseeducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error && state.error}
        </div>
    )
}

export default FetchDataWithUseeducer
