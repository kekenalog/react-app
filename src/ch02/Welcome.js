import React from 'react'
import './style.css'

function Welcome (props) {
  return <h1 className="foo">Hello, {props.name}</h1>
}

Welcome.defaultProps = {
  name: 'Stranger'
}

export { Welcome }
