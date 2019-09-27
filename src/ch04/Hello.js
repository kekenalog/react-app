import React from 'react'

class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: 'React',
      display: true
    }
  }

  render () {
    return (
      <div>{this.state.display ? <h1>Hello, {this.state.user}</h1> : null}</div>
    )
  }
}

export default Hello
