import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/scss/style.scss'

const Layout = ({ children }) => (
  <div className="wrapper">
    <Helmet
      link={[
        {
          name: 'alternate',
          type: 'application/rss+xml',
          title: 'rss',
          href: '/rss.xml',
        },
      ]}
    />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
