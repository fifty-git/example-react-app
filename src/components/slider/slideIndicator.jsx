import React from 'react'

class SlideIndicator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeSlide: null }
    console.log(this.props)
  }

  render() {
    return <div className="slideIndicator" />
  }
}

export default SlideIndicator
