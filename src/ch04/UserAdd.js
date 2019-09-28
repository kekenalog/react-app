import React from 'react'

class UserAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: ''
    }
  }

  handleChange = (e) => this.setState({ newUser: e.target.value })

  handleClick = () => {
    if (this.state.newUser && this.state.newUser.length > 0) {
      this.context.onAddUser(this.state.newUser)
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.newUser}
        />
        <button onClick={this.handleClick}>新增</button>
      </div>
    )
  }
}

UserAdd.contextTypes = {
  onAddUser: React.PropTypes.func
}

export default UserAdd
