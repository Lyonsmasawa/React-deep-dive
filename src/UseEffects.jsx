import React, { useEffect, useState } from 'react'
import CleanUp from './CleanUp'

const UseEffects = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('heey')

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  // runs after every render
  // useEffect(() => {
  //   document.title = 'hey'
  // })

  useEffect(() => {
    document.title = name
  }, [count])

  const logMousePosition = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  // only on initial render - componentdidmount //the return is clean up for diunmount
  useEffect(() => {
    console.log('called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log("unmount")
      window.removeEventListener('mouseover', logMousePosition)
    }
  }, [])

  // 


  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>add</button>
      {count}
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default UseEffects
