import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ location }) => {
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="header">
      <Link to="/" className="header-logo">
        lasse&apos;s blog
      </Link>
      <ul className="header-menu">
        <li className="header-menu__li">
          <Link to="/posts/">posts</Link>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default Header;
