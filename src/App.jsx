import { useState } from 'react'
import './App.css'
import Functional from './Functional&props'
import Jsx from './Jsx'
import Message from './State'
import Welcome from './Class&props'
import CounterClass from './Counter'
import Parent from './Parent'
import ConditionalRendering from './ConditionalRendering'
import ListRendering from './ListRendering'
import Stylesheets from './Stylesheets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Functional name='Lyons'>
        <p>This is children props</p>
      </Functional>
      <CounterClass />
      <Jsx />
      <Parent />
      <Message />
      <Welcome name='Masawa' />
      <ConditionalRendering />
      <ListRendering />
      <Stylesheets />
    </div>
  )
}

export default App
