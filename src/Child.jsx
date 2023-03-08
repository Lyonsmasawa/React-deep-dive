import React from 'react'

const Child = (props) => {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
      <button onClick={() => props.greetHandler('Lyons')}>Greet Parent</button>
    </div>
  )
}

export default Child
