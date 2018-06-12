import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-logo">
          lasse's blog
        </Link>
        <ul className="header-menu">
          <li className="header-menu__li">
            <Link to="/posts/">posts</Link>
          </li>
          <li className="header-menu__li">
            <Link to="/">about</Link>
          </li>
        </ul>
      </div>
    )
  }
}
