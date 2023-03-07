import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    // this.setState({
    //   count : this.state.count + 1
    // })
    this.setState((prevState, props) => ({
      count: prevState.count + props.addValue
    }))
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    }, () => { console.log('Callback value') })
  }



  render() {
    return (
      <div>
        <button onClick={() => this.decrement()}>-</button>
        {this.state.count}
        <button onClick={() => this.increment()}>+</button>
      </div>
    )
  }
}

export default Counter