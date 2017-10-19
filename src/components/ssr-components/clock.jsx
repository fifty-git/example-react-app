import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date().toLocaleTimeString() }
    this._updateClock = this._updateClock.bind(this)
  }
  componentDidMount() {
    this.time = setInterval(() => this._updateClock(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.time)
  }
  _updateClock() {
    this.setState({ time: new Date().toLocaleTimeString() })
  }
  render() {
    return (
      <div>
        <h2>Dynamic Clock Rendered on the Server</h2>
        <div className="clock">{this.state.time}</div>
      </div>
    )
  }
}

export default Clock
