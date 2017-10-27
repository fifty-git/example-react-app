import React from 'react'
import _ from 'lodash'

class SlideIndicator extends React.Component {
  constructor(props) {
    super(props)
    this._slideIndicatorIcons = _.fill(Array(this.props.sliderLength), '●')

    this._wrapperStyles = {
      width: '100%',
    }
    this._elementStyles = {
      display: 'inline-block',
      opacity: '0.25',
      width: 100 / this.props.sliderLength + '%',
      textAlign: 'center',
    }
    this._activeElementStyles = {
      display: 'inline-block',
      opacity: '0.75',
      width: 100 / this.props.sliderLength + '%',
      textAlign: 'center',
    }
  }

  _createIconElement(item, index) {
    if (index === this.props.activeSlide) {
      return (
        <div key={index} style={this._activeElementStyles}>
          {item}
        </div>
      )
    } else {
      return (
        <div key={index} style={this._elementStyles}>
          {item}
        </div>
      )
    }
  }

  render() {
    return (
      <div style={this._wrapperStyles} className="slideIndicatorWrapper">
        {this._slideIndicatorIcons.map((item, index) =>
          this._createIconElement(item, index)
        )}
      </div>
    )
  }
}

export default SlideIndicator
