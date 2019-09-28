import React from 'react'

import UserList from './UserList'
import UserDetail from './UserDetail'

class UserListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
      currentUserId: null
    }
  }

  handleAddUser = (user) => {
    var that = this
    fetch('/path/to/save-user-api', {
      method: 'POST',
      body: JSON.stringify({ username: user })
    }).then((response) => {
      response.json().then((newUser) =>
        that.setState((preState) => ({
          users: preState.users.concat([newUser])
        }))
      )
    })
  }

  componentDidMount() {
    var that = this
    fetch('/path/to/user-api').then((response) => {
      response.json().then((data) => {
        that.setState({
          users: data
        })
      })
    })
  }

  //设置当前选中的用户
  handleSetCurrentUser = (userId) => {
    this.setState({
      currentUserId: userId
    })
  }

  render() {
    const filterUsers = this.state.users.filter(
      (user) => user.id === this.state.currentUserId
    )
    const currentUser = filterUsers.length > 0 ? filterUsers[0] : null

    return (
      <div>
        <UserList
          users={this.state.users}
          currentUserId={this.state.currentUserId}
          onAddUser={this.handleAddUser}
          onSetCurrentUser={this.handleSetCurrentUser}
        />
        <UserDetail currentUser={currentUser} />
      </div>
    )
  }
}

export default UserListContainer
