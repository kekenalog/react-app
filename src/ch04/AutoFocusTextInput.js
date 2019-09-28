import React, { Component } from 'react'

class AutoFocusTextInput extends React.Component {
  componentDidMount () {
    // 通过ref让input自动获取焦点
    this.textInput.focus()
  }

  render () {
    return (
      <div>
        <input
          type="text"
          ref={(input) => {
            this.textInput = input
          }}
        />
      </div>
    )
  }
}
