import React from 'react'
import Popup from './popup.jsx'

class PopupWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isPopupOpen: false }
    this._openPopup = this._openPopup.bind(this)
    this._closePopup = this._closePopup.bind(this)
  }
  _openPopup() {
    this.setState({ isPopupOpen: true })
  }
  _closePopup() {
    this.setState({ isPopupOpen: false })
  }
  render() {
    return (
      <div className="popupContainer">
        <button onClick={() => this._openPopup()}>Popup!</button>
        <Popup
          isOpen={this.state.isPopupOpen}
          onClose={() => this._closePopup()}>
          <h1>Popup Header</h1>
          <p>Popup body</p>
          <button onClick={() => this._closePopup()}>Close me!</button>
        </Popup>
      </div>
    )
  }
}

export default PopupWrapper
