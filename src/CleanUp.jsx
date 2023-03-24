import React, { useEffect, useState } from 'react'
import UseEffects from './UseEffects'

const CleanUp = () => {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => { setDisplay(!display) }}>Toggle display</button>
            {display && <UseEffects/>}
        </div>
    )
}

export default CleanUp
