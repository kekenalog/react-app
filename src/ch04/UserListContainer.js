import React from 'react'

import UserList from './UserList'

class UserListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {}
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

  render() {
    return <UserList users={this.state.users} onAddUser={this.handleAddUser} />
  }
}

export default UserListContainer
