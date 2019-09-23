import React, { Component, form } from 'react'

class ReactStackForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'react' }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('You Picked [%s]', this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick one library:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="mobx">Mobx</option>
          </select>
        </label>
        <label>
          <input type="submit" value="提交" />
        </label>
      </form>
    )
  }
}

export default ReactStackForm
