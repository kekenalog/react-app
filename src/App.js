import React, { Component } from 'react'

import ErrorBoundary from './ch03/ErrorBoundary'

const Profile = ({ user }) => <div>name: {user}</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: { name: 'react' } }
  } // 将user置为null，模拟异常
  onClick = () => {
    this.setState({ user: null })
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <Profile user={this.state.user} />
        </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
      </div>
    )
  }
}
export default App
