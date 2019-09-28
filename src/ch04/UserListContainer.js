import React from 'react'

import UserList from './UserList'

class UserListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: {}
    }
  }

  componentDidMount () {
    var that = this
    fetch('/path/to/user-api').then((response) => {
      response.json().then((data) => {
        that.setState({
          users: data
        })
      })
    })
  }

  render () {
    return <UserList users={this.state.users} />
  }
}

export default UserListContainer
