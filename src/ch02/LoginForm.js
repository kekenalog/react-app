import React, { Component } from 'react'

import { form } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      pwd: ''
    }
  }

  handleChange = (e) => {
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('用户名:[%s],密码:[%s]', this.state.username, this.state.pwd)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          用户名:
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            onChange={this.handleChange}
          />
        </label>
        <label>
          密码:
          <input
            type="password"
            name="pwd"
            id="pwd"
            autoComplete="pwd"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input type="submit" value="提交" />
        </label>
      </form>
    )
  }
}

export default LoginForm
