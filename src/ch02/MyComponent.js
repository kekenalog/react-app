import React, { Component } from 'react'
import './MyComponent.css'

class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  handleClick = () => {
    console.log('=========', this.state.number)
    const number = this.state.number + 1
    this.setState({
      number: number
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default MyComponent
