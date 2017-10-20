import React from 'react'

class Images extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc:
        'https://cdn.allsunvalley.com/images/content/7458_8226_Idaho_Sawtooth_Mountains_lg.jpg',
    }

    this.imgStyle = {
      position: 'relative',
      display: 'block',
      width: 'auto',
    }
  }

  render() {
    return (
      <div style={this.imgStyle}>
        <img src={this.state.imgSrc} alt="This Image" />
      </div>
    )
  }
}

export default Images
