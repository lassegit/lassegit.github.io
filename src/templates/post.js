import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import rss from '../assets/svg/rss.svg'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const tags = frontmatter.tags
  const title = `${frontmatter.title} | ${data.site.siteMetadata.title}`

  return (
    <div className="blog-post-container">
      <Helmet title={title} />
      <div className="blog-post">
        <h1 className="blog-post__title">{frontmatter.title}</h1>
        <p className="blog-post__date">{frontmatter.date}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className="blog-post__footer">
        {tags ? (
          <ul className="blog-post__tags">
            Tags:{' '}
            {tags.map((tag, i) => (
              <li key={i}>
                <Link to={`/tags/${tag}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        ) : null}
        <p>
          <a href="/rss.xml">
            <i>Stay updated with rss: </i>{' '}
            <img src={rss} height="12px" width="12px" />
          </a>
        </p>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt
      html
      frontmatter {
        date(formatString: "D MMMM, YYYY")
        path
        title
        tags
      }
    }
  }
`