import React from 'react'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this._close = this._close.bind(this)

    this.popupStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff',
    }

    this.backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0,0,0, 0.3)',
    }
  }
  _close(event) {
    event.preventDefault()
    if (this.props.onClose) this.props.onClose()
  }
  render() {
    if (!this.props.isOpen) return null

    return (
      <div>
        <div style={this.popupStyle}>{this.props.children}</div>
        <div style={this.backdropStyle} onClick={event => this._close(event)} />
      </div>
    )
  }
}

export default Popup
