import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = ({ data }) => (
  <div>
    <Helmet title={`404 error | ${data.site.siteMetadata.title}`} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </div>
)

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
