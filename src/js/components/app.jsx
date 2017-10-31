import React from 'react'
import PlanetListContainer from './container-presentation/planetListContainer.jsx'
import PopupWrapper from './popup-example/popupWrapper.jsx'
import ImageSlider from './sliderHydrate.jsx'
import ClockApp from './appHydrate.jsx'

function App(props) {
  let sliderImageData

  sliderImageData = props ? props.images : null

  return (
    <div>
      <h1>Fully Server Rendered</h1>
      <ImageSlider images={sliderImageData} />
      <ClockApp />
      <PopupWrapper />
      <PlanetListContainer />
    </div>
  )
}

export default App
