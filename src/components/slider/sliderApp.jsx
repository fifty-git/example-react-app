import React from 'react'
import _ from 'lodash/core'
import Buttons from './buttons.jsx'
import Image from './images.jsx'
import SlideIndicators from './slideIndicator.jsx'

class SliderApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: null,
      previousSlide: null,
      nextSlide: null,
    }
    this._imageKeyArray = _.keys(this.props.images)
    this.nextImage = this._nextImage.bind(this)
    this.previousImage = this._previousImage.bind(this)
  }

  _getImage(imageKey) {
    if (
      !this.props.images[imageKey] &&
      (!this.props.images[imageKey + 1] || !this.props.images[imageKey - 1])
    ) {
      return this.props.images[0]
    } else {
      return this.props.images[imageKey]
    }
  }

  _getImageKey(currentState) {
    // no image should be undefined
    if (
      !this._imageKeyArray[currentState] &&
      (!this._imageKeyArray[currentState + 1] ||
        !this._imageKeyArray[currentState - 1])
    ) {
      return this._imageKeyArray[0]
    } else {
      return this._imageKeyArray[currentState]
    }
  }

  _nextImage() {
    this.setState(previousState => ({
      currentSlide: {
        image: this._getImage(previousState.nextSlide.key),
        key: this._getImageKey(previousState.nextSlide.key),
      },
      nextSlide: {
        image: this._getImage(previousState.nextSlide.key),
        key: this._getImageKey(
          this._imageKeyArray.indexOf(previousState.nextSlide.key) + 1
        ),
      },
      previousState: {
        image: this._getImage(previousState.previousSlide.key),
        key: this._getImageKey(
          this._imageKeyArray.indexOf(previousState.previousSlide.key) + 1
        ),
      },
    }))
  }

  _previousImage() {
    this.setState(previousState => ({
      currentSlide: {
        image: this._getImage(previousState.previousSlide.key),
        key: this._getImageKey(previousState.previousSlide.key),
      },
      nextSlide: {
        image: this._getImage(previousState.currentSlide.key),
        key: this._getImageKey(
          this._imageKeyArray.indexOf(previousState.currentSlide.key)
        ),
      },
      previousState: {
        image: this._getImage(
          this._getImageKey(
            this._imageKeyArray.indexOf(previousState.previousSlide.key) - 1
          )
        ),
        key: this._getImageKey(
          this._imageKeyArray.indexOf(previousState.previousSlide.key) - 1
        ),
      },
    }))
  }

  componentWillMount() {
    this.setState({
      currentSlide: {
        image: this._getImage(this._imageKeyArray[0]),
        key: this._imageKeyArray[0],
      },
      nextSlide: {
        image: this._getImage(this._imageKeyArray[1]),
        key: this._imageKeyArray[1],
      },
      previousSlide: {
        image: this._getImage(
          this._imageKeyArray[this._imageKeyArray.length - 1]
        ),
        key: this._imageKeyArray[this._imageKeyArray.length - 1],
      },
    })
  }

  render() {
    return (
      <div className="sliderWrapper">
        <Buttons
          nextImageMethod={this.nextImage}
          previousImageMethod={this.previousImage}
        />
        <div className="mainSliderFrame">
          <Image sliderImage={this.state.currentSlide.image} />
        </div>
        <SlideIndicators sliderLength={this._imageKeyArray.length} />
      </div>
    )
  }
}

export default SliderApp
