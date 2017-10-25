import React from 'react'
import SliderApp from './slider/sliderApp.jsx'

function SliderHydrate(props) {
  return (
    <div className="SliderMade">
      <h1>Slider Made</h1>
      <SliderApp images={props} />
    </div>
  )
}

export default SliderHydrate
