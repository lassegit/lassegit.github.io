import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class NotFoundPage extends Component {
  render() {
    const title = `404 error | ${this.props.data.site.siteMetadata.title}`

    return (
      <div>
        <Helmet title={title} />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
