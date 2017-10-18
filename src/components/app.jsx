import React from 'react'
import PlanetListContainer from './planetListContainer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>I am a react header</h1>
        <PlanetListContainer />
      </div>
    )
  }
}

export default App
