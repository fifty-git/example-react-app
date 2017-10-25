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

/* NOTE TO FUTURE PERSON:

   Data passing when hydrating a set of components that where rendered server side has
   to pass data and call the function like it does on the server. So for this situation,
   when I render SliderHydrate on the server, I call it as a function and pass the
   props as arguments to the function. To have the data propegate correctly, you need
   to call it the same way when you hydrate it on the client.

*/
const renderSlider = () => {
  ReactDom.hydrate(
    SliderHydrate(images),
    document.getElementById('sliderRoot'),
    () => console.log('Slider Render Complete')
  )
}

export default {
  ssr: renderFirstServer,
  client: renderClient,
  sliderSsr: renderSlider,
}
