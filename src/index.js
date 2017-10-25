import Renderer from './render.jsx'
import Images from './imageData.js'

Renderer.client()
Renderer.sliderSsr()

window
  .fetch('/renderCode?component=appHydrate', {
    method: 'POST',
  })
  .then(response => response.json())
  .then(response => {
    document.querySelector('#serverRoot').innerHTML = response.htmlResponse
    Renderer.ssr()
  })
  .catch(err => {
    throw new Error(err)
  })

// window
//   .fetch('/renderCode?component=sliderHydrate', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(Images),
//   })
//   .then(response => response.json())
//   .then(response => {
//     document.querySelector('#sliderRoot').innerHTML = response.htmlResponse
//     Renderer.sliderSsr()
//   })
//   .catch(err => {
//     throw new Error(err)
//   })
