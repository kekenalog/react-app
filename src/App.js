import React from 'react'

import ListComponent from './ch03/ListComponent'
import StringComponent from './ch03/StringComponent'

function App () {
  return [
    <ul>
      <ListComponent />
    </ul>,
    <StringComponent />
  ]
}

export default App
