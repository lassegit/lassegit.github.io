import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({ pathContext, data }) {
  const tag = pathContext.tag
  const total = data.allMarkdownRemark.totalCount
  const title = `${tag} | ${data.site.siteMetadata.title}`
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Helmet title={title} />
      <h1>
        {tag} ({total})
      </h1>
      <ul className="post-list">
        {posts.map((post, i) => (
          <li key={i}>
            <Link to={post.node.frontmatter.path}>
              <span className="post-list__title">
                {post.node.frontmatter.title}
              </span>
            </Link>
            <span className="post-list__date">
              ({post.node.frontmatter.date})
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "D MMM, YYYY")
            title
            path
            tags
          }
        }
      }
    }
  }
`
