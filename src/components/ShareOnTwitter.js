import React from 'react';
import PropTypes from 'prop-types';
import twitter from '../assets/svg/twitter.svg';

const ShareOnTwitter = ({ link, text, className }) => (
  <a
    href={`http://twitter.com/share?url=${encodeURIComponent(
      link
    )}&text=${encodeURIComponent(text || '')}`}
    className={className}
  >
    Share on Twitter <img src={twitter} />
  </a>
);

ShareOnTwitter.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default ShareOnTwitter;
