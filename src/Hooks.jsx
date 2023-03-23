import React, { useState } from 'react'

const Hooks = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState({ firstName: '', lastName: '' }) //objects
    const [items, setItems] = useState([{ id: 1, value: 23 }]) //array

    const addItems = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            {/* //unsafe */}
            <button onClick={addItems}>add item</button>
            <ul>
                {items.map((item) => {
                    <li key={item.id}>{item.value}</li>
                })}
            </ul>
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
            {/* //safe - update from prev state */}
            <button onClick={() => { setCount(prevCount => prevCount + 2) }}>{count}</button>
            <div className="">
                <input type="text" name="" value={name.firstName} onChange={(e) => { setName({ ...name, firstName: e.target.value }) }} />
                <input type="text" name="" value={name.lastName} onChange={(e) => { setName({ ...name, lastName: e.target.value }) }} />
                <h2>First Name:{name.firstName} - Last Name:{name.lastName}</h2>
            </div>
        </div>
    )
}

export default Hooks
