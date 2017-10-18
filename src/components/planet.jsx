import React from 'react'

class Planet extends React.Component {
  render() {
    return (
      <div className="planetContainer">
        <h2>Planet Name: {this.props.planetDetails.name}</h2>
        <div className="planetDiameter">
          Planet Diameter: {this.props.planetDetails.diameter}
        </div>
        <br />
        <div className="planetPopulation">
          Planet Population: {this.props.planetDetails.population}
        </div>
        <br />
      </div>
    )
  }
}

export default Planet
