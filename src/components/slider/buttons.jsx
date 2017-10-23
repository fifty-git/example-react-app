import React from 'react'

class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="buttonFrame">
        <button className="buttonRight">&#9654;</button>
        <button className="buttonLeft">&#9664;</button>
      </div>
    )
  }
}

export default Buttons
