import React from 'react'
import Clock from './ssr-components/clock.jsx'

function HydrateMe() {
  return (
    <div className="ServerMade">
      <h1>Server Made</h1>
      <Clock />
    </div>
  )
}

export default HydrateMe
