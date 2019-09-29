import React, { Component } from 'react'

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // 通过ref让input自动获取焦点
    this.textInput.focus()
  }

  // 让input失去焦点
  blur() {
    this.textInput.blur()
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onBlur={this.blur}
          ref={(input) => {
            this.textInput = input
          }}
        />
      </div>
    )
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    // 通过ref调用AutoFocusTextInput组件的方法
    this.inputInstance.blur()
  }

  render() {
    return (
      <div>
        <AutoFocusTextInput
          ref={(input) => {
            this.inputInstance = input
          }}
        />
        <button onClick={this.handleClick}>失去焦点</button>
      </div>
    )
  }
}
