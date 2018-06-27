import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/scss/style.scss'

const Layout = ({ children, location }) => (
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
    <Header location={location} />
    <div>{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
