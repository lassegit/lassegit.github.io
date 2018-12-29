import React from 'react';
import Link from 'gatsby-link';

const Header = ({ location }) => {
  if (location.pathname === '/') return null;

  return (
    <div className="header">
      <Link to="/" className="header-logo">
        lasse's blog
      </Link>
      <ul className="header-menu">
        <li className="header-menu__li">
          <Link to="/posts/">posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
