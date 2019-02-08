import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import rss from '../assets/svg/rss.svg';

const Posts = ({ data }) => {
  const title = `Posts | ${data.site.siteMetadata.title}`;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Helmet title={title} />
      <h1>
        Posts
        <a href="/rss.xml" className="post-list__rss">
          <img src={rss} alt="RSS logo" />
        </a>
      </h1>
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={post.node.frontmatter.path}>
              <span className="post-list__title">{post.node.frontmatter.title}</span>
            </Link>
            <span className="post-list__date">({post.node.frontmatter.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
`;

Posts.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Posts;
