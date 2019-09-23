import React, { Component } from 'react'

class MyComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  render () {
    return (
      <button
        onClick={(event) => {
          console.log(this.state.number)
        }}
      >
        Click
      </button>
    )
  }
}

export default MyComponent
