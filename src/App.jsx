import { useState } from 'react'
import './App.css'
import Functional from './Functional'
import Jsx from './Jsx'
import Message from './Message'
import Welcome from './Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Functional name='Lyons'>
        <p>This is children props</p>
      </Functional>
      <Jsx />
      <Message />
      <Welcome />
    </div>
  )
}

export default App
