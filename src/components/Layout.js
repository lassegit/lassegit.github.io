import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { favicon } from '../assets/img';
import '../assets/scss/style.scss';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, location }) => (
  <div>
    <div className="wrapper">
      <Helmet
        link={[
          {
            rel: 'alternate',
            type: 'application/rss+xml',
            title: 'rss',
            href: '/rss.xml',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: favicon,
          },
        ]}
      />
      <Header location={location} />
      <div>{children}</div>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Layout.defaultProps = {
  location: undefined,
};

export default Layout;
