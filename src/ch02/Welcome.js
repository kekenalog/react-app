import React from 'react'

function Welcome (props) {
  const style = {
    width: '100%',
    height: '50px',
    backgroundColor: 'yellow',
    fontSize: '20px'
  }
  return <h1 style={style}>Hello, {props.name}</h1>
}

Welcome.defaultProps = {
  name: 'Stranger'
}

export { Welcome }
