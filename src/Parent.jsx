import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(child) {
    alert(`Hello ${this.state.parentName} from ${child}`)
  }

  render() {
    return (
      <>
        <Child greetHandler={this.greetParent}/>
      </>
    )
  }
}

export default Parent