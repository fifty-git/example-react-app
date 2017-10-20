import React from 'react'

class Buttons extends React.Component {
  constructor(props) {
    super(props)

    this.buttonFrame = {
      position: 'absolute',
      top: '46%',
      height: '40px',
      width: '800px',
      zIndex: '9999',
    }

    this.buttonLeft = {
      position: 'relative',
      left: '-34px',
      top: '0px',
    }

    this.buttonRight = {
      position: 'relative',
      left: '757px',
      top: '0px',
    }
  }

  render() {
    return (
      <div style={this.buttonFrame}>
        <button style={this.buttonRight}>&#9654;</button>
        <button style={this.buttonLeft}>&#9664;</button>
      </div>
    )
  }
}

export default Buttons
