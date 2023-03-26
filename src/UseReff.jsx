import React, { useEffect, useRef, useState } from 'react'
// being that we cant access the interval from outside when clearing the interval
const UseReff = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
      intervalRef.interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1)
      }, 1000)
    
      return () => {
        clearInterval(intervalRef.interval)
      }
    }, [timer])
    
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.interval)}>clear interval</button>
    </div>
  )
}

export default UseReff
