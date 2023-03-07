import React from 'react'

const Jsx = () => {
    // return (
    //     <div className="dummyClass">
    //         <h1>Hello lyons</h1>
    //     </div >
    // )
    return React.createElement('div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Lyons')
    )
}

export default Jsx