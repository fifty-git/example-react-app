import Renderer from './render.jsx'

Renderer.client()

window
  .fetch('/renderCode?component=appHydrate', {
    method: 'POST',
  })
  .then(response => response.json())
  .then(response => {
    document.querySelector('#serverRoot').innerHTML = response.htmlResponse
    Renderer.ssr()
  })
