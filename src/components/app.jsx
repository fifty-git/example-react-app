import React from 'react'
import PlanetListContainer from './container-presentation/planetListContainer.jsx'
import PopupWrapper from './popup-example/popupWrapper.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>I am a react header</h1>
        <PopupWrapper />
        <PlanetListContainer />
      </div>
    )
  }
}

export default App
