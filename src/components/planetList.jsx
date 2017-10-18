import React from 'react'
import Planet from './planet.jsx'

class PlanetList extends React.Component {
  constructor(props) {
    super(props)
    this.postDataRender = this.postDataRender.bind(this)
  }
  filterMissingPlanets(planet) {
    let parsedPlanetData = JSON.parse(planet)
    return parsedPlanetData.detail !== 'Not found' ? planet : false
  }
  postDataRender() {
    let planetsArray = this.props.planets.filter(this.filterMissingPlanets)

    return (
      <div className="planetList">
        {planetsArray.map((planet, index) => (
          <Planet key={index} planetDetails={JSON.parse(planet)} />
        ))}
      </div>
    )
  }
  preDataRender() {
    return <h3>Waiting...</h3>
  }
  render() {
    let component = null
    if (this.props.planets[0] !== undefined) {
      component = this.postDataRender()
    } else {
      component = this.preDataRender()
    }

    return component
  }
}

export default PlanetList
