import React from 'react'

class Image extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.sliderImage) {
      return null
    }
    return (
      <div className="imgStyle">
        <img src={this.props.sliderImage} alt="Image One" />
      </div>
    )
  }
}

export default Image
