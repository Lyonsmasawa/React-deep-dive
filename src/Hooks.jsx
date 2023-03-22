import React, { useState } from 'react'

const Hooks = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            {/* //unsafe */}
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
            {/* //safe - update from prev state */}
            <button onClick={() => { setCount(prevCount => prevCount + 2) }}>{count}</button>
            <div className="">
                <input type="text" name="" value={name.firstName} onChange={(e) => { setName({ firstName: e.target.value }) }} />
                <input type="text" name="" value={name.lastName} onChange={(e) => { setName({ lastName: e.target.value }) }} />
                <h2>First Name:{name.firstName} - Last Name:{name.lastName}</h2>
            </div>
        </div>
    )
}

export default Hooks
