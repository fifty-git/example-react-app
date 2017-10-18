import React from 'react'
import PlanetList from './planetList.jsx'

class PlanetListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.endpoint = '/data'
    this.planetListLength = '5'
    this.state = { planets: [] }
    this._retreiveData = this._retreiveData.bind(this)
  }
  _retreiveData() {
    window
      .fetch(`${this.endpoint}?amount=${this.planetListLength}`, {
        method: 'POST',
      })
      .then(response => response.json())
      .then(response => this.setState({ planets: response }))
  }
  componentDidMount() {
    this._retreiveData()
  }
  render() {
    return <PlanetList planets={this.state.planets} />
  }
}

export default PlanetListContainer
