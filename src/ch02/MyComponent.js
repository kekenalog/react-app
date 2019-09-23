import React, { Component } from 'react'
import './MyComponent.css'

class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3, 4],
      current: 1
    }
  }

  handleClick = (item, event) => {
    console.log('=========', item)
    this.setState({
      current: item
    })
  }

  render() {
    return (
      <ul>
        {this.state.list.map((item) => (
          <li
            key={item}
            className={this.state.current === item ? 'current' : ''}
            onClick={this.handleClick}
          ></li>
        ))}
      </ul>
    )
    // <button onClick={(item,ent)this.handleClick}>Click</button>
  }
}

export default MyComponent
