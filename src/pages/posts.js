import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import rss from '../assets/svg/rss.svg'

export default class Posts extends Component {
  render() {
    const title = `Posts | ${this.props.data.site.siteMetadata.title}`
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <Helmet title={title} />
        <h1>
          Posts
          <a href="/rss.xml" className="post-list__rss">
            <img src={rss} />
          </a>
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
}

export const pageQuery = graphql`
  query Posts {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "D MMM, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
