import React from 'react'

import './PostList.css'

class UserList extends React.Component {
  render () {
    return (
      <div>
        <ul className="user-list">
          {this.props.users.map(function (user) {
            return (
              <li key={user.id}>
                <span>{user.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default UserList
