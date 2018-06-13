import React, { Component } from 'react'
import PropTypes from 'prop-types'
import twitter from '../assets/svg/twitter.svg'

export default class ShareOnTwitter extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string,
  }

  render() {
    const { link, text, className } = this.props
    const shareUrl = `http://twitter.com/share?url=${encodeURIComponent(
      link
    )}&text=${encodeURIComponent(text || '')}`

    return (
      <a href={shareUrl} className={className}>
        Share on Twitter <img src={twitter} />
      </a>
    )
  }
}
