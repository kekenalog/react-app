import React, { Component } from 'react'

import Modal from './ch03/Modal'

import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true
    }
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>Modal Dialog</Modal>
        )}
        <span>
          <div custom-attribute="something" />
        </span>
      </div>
    )
  }
}
export default App
