import PropTypes from 'prop-types';
import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Template({ pageContext, data }) {
  const { tag } = pageContext;
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
      sort: { frontmatter: { date: DESC } }
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
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({}).isRequired,
};
