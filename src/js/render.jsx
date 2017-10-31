import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app.jsx'
import './components/ssr-components/styles/clock.css'

// Assets and data
import './components/slider/slider.css'
import images from './imageData.js'

const renderClient = () => {
  ReactDom.hydrate(
    <App images={images} />,
    document.querySelector('#root'),
    () => console.log('All ssr components are hydrated')
  )
}

/* NOTE TO FUTURE PERSON:

   Data passing when hydrating a set of components that where rendered server
   side has to pass data and call the function like it does on the server. So
   for this situation, when I render SliderHydrate on the server, I call it as
   a function and pass the props as arguments to the function. To have the data
   propegate correctly, you need to call it the same way when you hydrate it on
   the client.

*/

export default {
  fullSsrHydrate: renderClient,
}
