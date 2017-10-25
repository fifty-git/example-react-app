import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app.jsx'
import HydrateApp from './components/appHydrate.jsx'
import SliderHydrate from './components/sliderHydrate.jsx'
import './components/ssr-components/styles/clock.css'
import pupper from './pupper.jpg'
import './components/slider/slider.css'
import images from './imageData.js'

const renderClient = () => {
  ReactDom.render(<App image={pupper} />, document.querySelector('#root'), () =>
    console.log('Client Side Rendered')
  )
}

const renderFirstServer = () => {
  ReactDom.hydrate(<HydrateApp />, document.getElementById('serverRoot'), () =>
    console.log('SSR Hydrate Complete')
  )
}

const renderSlider = () => {
  ReactDom.render(
    <SliderHydrate rImages={images} />,
    document.getElementById('sliderRoot'),
    () => console.log('Slider Render Complete')
  )
}

export default {
  ssr: renderFirstServer,
  client: renderClient,
  sliderSsr: renderSlider,
}
