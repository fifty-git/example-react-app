import React from 'react'
import PlanetList from './planetList.jsx'

class PlanetListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.endpoint = '/data'
    this.planetListLength = '5'
    this.state = { planets: [], error: null }
    this._retreiveData = this._retreiveData.bind(this)
  }
  _retreiveData() {
    window
      .fetch(`${this.endpoint}?amount=${this.planetListLength}`, {
        method: 'POST',
      })
      .then(response => response.json())
      .then(response => this.setState({ planets: response }))
      .catch(error => {
        console.log(error)
        this.setState({ error: error })
      })
  }
  componentDidMount() {
    this._retreiveData()
  }
  render() {
    if (this.state.error) {
      return <h1>Oh No... The request failed</h1>
    } else {
      return <PlanetList planets={this.state.planets} />
    }
  }
}

export default PlanetListContainer
