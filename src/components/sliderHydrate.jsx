import React from 'react'
import SliderApp from './slider/sliderApp.jsx'

function SliderHydrate(props) {
  return (
    <div className="SliderMade">
      <h1>Slider Made</h1>
      <SliderApp hImages={props.rImages} />
    </div>
  )
}

export default SliderHydrate
