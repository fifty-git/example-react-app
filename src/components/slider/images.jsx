import React from 'react'

class Images extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="imgStyle">
        <img src={this.props.sImages.one} alt="Image One" />
      </div>
    )
  }
}

export default Images
