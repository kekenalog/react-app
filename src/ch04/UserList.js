import React from 'react'

import './PostList.css'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: ''
    }
  }

  handleChange = (e) => this.setState({ newUser: e.target.value })

  handleClick = () => {
    if (this.state.newUser && this.state.newUser.length > 0) {
      this.props.onAddUser(this.state.newUser)
    }
  }

  handleUserClick = (userId) => {
    this.props.onSetCurrentUser(userId)
  }

  render() {
    return (
      <div>
        <ul className="user-list">
          {this.props.users.map(function(user) {
            return (
              <li
                key={user.id}
                className={
                  this.props.currentUserId === user.id ? 'current' : ''
                }
                onClick={this.handleUserClick(user.id)}
              >
                <span>{user.name}</span>
              </li>
            )
          })}
        </ul>
        <input onChange={this.handleChange} value={this.state.newUser} />
        <button onClick={this.handleClick}>新增</button>
      </div>
    )
  }
}

export default UserList
