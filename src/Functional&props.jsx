import React from 'react'

const Functional = (props) => {
  return (
    <div className="shopping-list">
      <h1>Shopping List for</h1>
      <ul>
        <li>{props.name}</li>
        {props.children}
      </ul>
    </div>
  )
}

export default Functional