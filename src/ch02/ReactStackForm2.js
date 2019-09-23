import React, { Component, form } from 'react'

class ReactStackForm2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      react: false,
      redux: false,
      mobx: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      'React checked [%s], Redux checked [%s], Mobx checked [%s]',
      this.state.react,
      this.state.redux,
      this.state.mobx
    )
  }

  handleChange = (event) => {
    const target = event.target
    this.setState({
      [target.name]: target.checked
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          React
          <input
            type="checkbox"
            name="react"
            value="react"
            checked={this.state.react}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Redux
          <input
            type="checkbox"
            name="redux"
            value="redux"
            checked={this.state.redux}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Mobx
          <input
            type="checkbox"
            name="mobx"
            value="mobx"
            checked={this.state.mobx}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ReactStackForm2
