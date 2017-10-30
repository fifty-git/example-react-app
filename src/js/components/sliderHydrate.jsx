import React from 'react'
import SliderApp from './slider/sliderApp.jsx'

function SliderHydrate(props) {
  let imageData

  if (props.images) {
    imageData = props.images
  } else {
    imageData = null
  }
  return (
    <div className="SliderMade">
      <h1>Slider Made</h1>
      <SliderApp images={imageData} />
    </div>
  )
}

export default SliderHydrate
