import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Header extends Component {
  render() {
    const { pathname } = this.props.location
    if (pathname === '/') {
      return null
    }

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
    )
  }
}
