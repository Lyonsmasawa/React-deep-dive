import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'reset':
            return initialState
        case 'decrement':
            return state - 1
        default:
            return satisfies
    }
}

const CounterWithReducer = () => {
   const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => {dispatch('increment')}}>increment</button>
            <button onClick={() => {dispatch('reset')}}>reset</button>
            <button onClick={() => {dispatch('decrement')}}>decrement</button>
        </div>
    )
}

export default CounterWithReducer
