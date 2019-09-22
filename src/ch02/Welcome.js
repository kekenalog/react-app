import React from 'react'

function Welcome (props) {
  return (
    <h1
      style={{
        width: '100%',
        height: '50px',
        backgroundColor: 'green',
        fontSize: '20px'
      }}
    >
      Hello, {props.name}
    </h1>
  )
}

Welcome.defaultProps = {
  name: 'Stranger'
}

export { Welcome }
