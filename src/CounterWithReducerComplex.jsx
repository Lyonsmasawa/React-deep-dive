import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + 1}
        case 'reset':
            return initialState
        case 'decrement':
            return {firstCounter: state.firstCounter - 1}
        default:
            return state.firstCounter
    }
}

const CounterWithReducerComplex = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={() => { dispatch({ type: 'increment' }) }}>increment</button>
            <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>decrement</button>
        </div >
    )
}

export default CounterWithReducerComplex
