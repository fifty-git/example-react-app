import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app.jsx'
import HydrateApp from './components/appHydrate.jsx'

const renderClient = () => {
  ReactDom.render(<App />, document.querySelector('#root'), () =>
    console.log('Client Side Rendered'),
  )
}

const renderServer = () => {
  ReactDom.hydrate(<HydrateApp />, document.getElementById('serverRoot'), () =>
    console.log('SSR Hydrate Complete'),
  )
}

export default { ssr: renderServer, client: renderClient }
