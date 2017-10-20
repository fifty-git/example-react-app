import React from 'react'
import Buttons from './buttons.jsx'
import Images from './images.jsx'

class SliderApp extends React.Component {
  constructor(props) {
    super(props)

    this.sliderWrapper = {
      maxWidth: '800px',
      margin: '0 auto',
    }

    this.mainSliderFrame = {
      width: '100%',
      height: '480px',
      border: '1px solid #000',
      overflow: 'hidden',
    }
  }

  render() {
    return (
      <div style={this.sliderWrapper}>
        <Buttons />
        <div style={this.mainSliderFrame} className="mainSliderFrame">
          <Images />
        </div>
      </div>
    )
  }
}

export default SliderApp
