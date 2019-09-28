import React from 'react'

import './PostList.css'
import UserAdd from './UserAdd'

class UserList extends React.Component {
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
        <UserAdd onAddUser={this.props.onAddUser} />
      </div>
    )
  }
}

export default UserList
