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
      activeSlide: null,
    }
    this._imageKeyArray = _.keys(this.props.images)
    this.nextImage = this._nextImage.bind(this)
    this.previousImage = this._previousImage.bind(this)
  }

  _getImage(imageKey) {
    return this.props.images[imageKey]
  }

  _getImageKey(currentState) {
    if (currentState === -1) {
      return this._imageKeyArray[this._imageKeyArray.length - 1]
    } else if (currentState >= this._imageKeyArray.length) {
      return this._imageKeyArray[0]
    } else {
      return this._imageKeyArray[currentState]
    }
  }

  _nextImage() {
    this.setState(previousState => ({
      currentSlide: {
        image: this._getImage(
          this._getImageKey(
            this._imageKeyArray.indexOf(previousState.currentSlide.key) + 1,
            previousState.currentSlide.key
          )
        ),
        key: this._getImageKey(
          this._imageKeyArray.indexOf(previousState.currentSlide.key) + 1
        ),
      },
      activeSlide:
        previousState.activeSlide + 1 >= this._imageKeyArray.length
          ? 0
          : previousState.activeSlide + 1,
    }))
  }

  _previousImage() {
    this.setState(previousState => ({
      currentSlide: {
        image: this._getImage(
          this._getImageKey(
            this._imageKeyArray.indexOf(previousState.currentSlide.key) - 1,
            previousState.currentSlide.key
          )
        ),
        key: this._getImageKey(
          this._imageKeyArray.indexOf(previousState.currentSlide.key) - 1,
          previousState.currentSlide.key
        ),
      },
      activeSlide:
        previousState.activeSlide - 1 < 0
          ? this._imageKeyArray.length - 1
          : previousState.activeSlide - 1,
    }))
  }

  componentWillMount() {
    if (this.props.images) {
      this.setState({
        currentSlide: {
          image: this._getImage(this._imageKeyArray[0]),
          key: this._imageKeyArray[0],
        },
        activeSlide: 0,
      })
    }
  }

  render() {
    if (!this.props || !this.props.images) {
      return <h3>Waiting for Images...</h3>
    }

    return (
      <div className="sliderContainer">
        <div className="sliderWrapper">
          <Buttons
            nextImageMethod={this.nextImage}
            previousImageMethod={this.previousImage}
          />
          <div className="mainSliderFrame">
            <Image sliderImage={this.state.currentSlide.image} />
          </div>
          <SlideIndicators
            activeSlide={this.state.activeSlide}
            sliderLength={this._imageKeyArray.length}
          />
        </div>
      </div>
    )
  }
}

export default SliderApp
