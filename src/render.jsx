import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app.jsx'
import HydrateApp from './components/appHydrate.jsx'
import './components/ssr-components/styles/clock.css'
import pupper from './pupper.jpg'

const renderClient = () => {
  ReactDom.render(<App image={pupper} />, document.querySelector('#root'), () =>
    console.log('Client Side Rendered'),
  )
}

const renderServer = () => {
  ReactDom.hydrate(<HydrateApp />, document.getElementById('serverRoot'), () =>
    console.log('SSR Hydrate Complete'),
  )
}

export default { ssr: renderServer, client: renderClient }
