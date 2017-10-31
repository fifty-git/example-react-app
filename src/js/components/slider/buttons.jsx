import React from 'react'

class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="buttonFrame">
        <button
          onClick={() => this.props.nextImageMethod()}
          className="buttonRight"
        >
          &#9654;
        </button>
        <button
          onClick={() => this.props.previousImageMethod()}
          className="buttonLeft"
        >
          &#9664;
        </button>
      </div>
    )
  }
}

export default Buttons
