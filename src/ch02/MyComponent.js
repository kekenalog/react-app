import React, { Component } from 'react'

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
    return <button onClick={this.handleClick}>Click</button>
  }
}

export default MyComponent
