import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

export default function Template({ pathContext, data }) {
  const { tag } = pathContext;
  const { totalCount } = data.allMarkdownRemark;
  const title = `${tag} | ${data.site.siteMetadata.title}`;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Helmet title={title} />
      <h1>
        {tag} ({totalCount})
      </h1>
      <ul className="post-list">
        {posts.map((post, i) => (
          <li key={i}>
            <Link to={post.node.frontmatter.path}>
              <span className="post-list__title">{post.node.frontmatter.title}</span>
            </Link>
            <span className="post-list__date">({post.node.frontmatter.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
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
`;

Template.propTypes = {
  pathContext: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
};
