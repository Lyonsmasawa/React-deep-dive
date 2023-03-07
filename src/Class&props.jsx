import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <ul>
          <li>{this.props.name} props</li>
        </ul>
      </div>
    )
  }
}

export default Welcome