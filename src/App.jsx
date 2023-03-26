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
import Lifecycle from './Lifecycle'
import FragmentDemo from './FragmentDemo'
import PureComponents from './PureComponents'
import Memo from './Memo'
import PortalDemo from './PortalDemo'
import { UserProvider } from './userContext'
import User from './User'
import Hooks from './Hooks'
import UseEffects from './UseEffects'
import CleanUp from './CleanUp'
import CounterWithReducer from './CounterWithReducer'
import CounterWithReducerComplex from './CounterWithReducerComplex'
import FetchDataWithUseeducer from './FetchDataWithUseeducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Functional name='Lyons'>
        <p>This is children prop</p>
      </Functional>
      <CounterClass />
      <Jsx />
      <FragmentDemo />
      <PureComponents />
      <Parent />
      <Message />
      <Welcome name='Masawa' />
      <ConditionalRendering />
      <ListRendering />
      <Stylesheets />
      <Lifecycle />
      <PortalDemo />
      <UserProvider value="Lyons">
        <User />
      </UserProvider>
      <CleanUp />
      <Hooks />
      <UseEffects />
      <CounterWithReducer />
      <CounterWithReducerComplex />
      <FetchDataWithUseeducer />
    </div>
  )
}

export default App
