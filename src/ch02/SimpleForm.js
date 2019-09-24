import React, { form } from 'react'

class SimpleForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('The title you submitted was [%s]', this.input.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          title:
          <input
            type="text"
            defaultValue="something"
            ref={(input) => (this.input = input)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default SimpleForm
