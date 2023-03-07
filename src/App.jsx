import { useState } from 'react'
import './App.css'
import Functional from './Functional&props'
import Jsx from './Jsx'
import Message from './State'
import Welcome from './Class&props'
import CounterClass from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Functional name='Lyons'>
        <p>This is children props</p>
      </Functional>
      <CounterClass />
      <Jsx />
      <Message />
      <Welcome name='Masawa' />
    </div>
  )
}

export default App
