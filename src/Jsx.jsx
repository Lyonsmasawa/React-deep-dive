import React from 'react'

const Jsx = () => {
    //   return (
    //     <div>
    //        <div className="shopping-list">
    //         <h1>Shopping List for {this.props.name}</h1>
    //         <ul>
    //           <li>Instagram</li>
    //           <li>WhatsApp</li>
    //           <li>Oculus</li>
    //         </ul>
    //       </div>
    //     </div>
    //   )
    return React.createElement('div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Lyons')
    )
}

export default Jsx