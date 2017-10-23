import React from 'react'
import Buttons from './buttons.jsx'
import Images from './images.jsx'

class SliderApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sliderWrapper">
        <Buttons />
        <div className="mainSliderFrame">
          <Images sImages={this.props.hImages} />
        </div>
      </div>
    )
  }
}

export default SliderApp
