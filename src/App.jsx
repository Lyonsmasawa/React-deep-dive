import { useState } from 'react'
import './App.css'
import Functional from './Functional'
import Jsx from './Jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Functional />
      <Jsx />
    </div>
  )
}

export default App
