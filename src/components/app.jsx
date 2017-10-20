import React from 'react'
import PlanetListContainer from './container-presentation/planetListContainer.jsx'
import PopupWrapper from './popup-example/popupWrapper.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.imageStyles = {
      width: '350px',
    }
  }

  render() {
    return (
      <div>
        <h1>I am a react header</h1>
        <img src={this.props.image} style={this.imageStyles} />
        <PopupWrapper />
        <PlanetListContainer />
      </div>
    )
  }
}

export default App
