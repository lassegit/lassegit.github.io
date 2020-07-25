import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { favicon } from '../assets/img';
import '../assets/scss/style.scss';

const Layout = ({ children, location }) => (
  <div>
    <div className="alert">
      NOT AVAILABLE until: <b>September 2020</b>
    </div>
    <div className="wrapper">
      <Helmet
        link={[
          {
            name: 'alternate',
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
      <div>{children()}</div>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.func.isRequired,
};

export default Layout;
