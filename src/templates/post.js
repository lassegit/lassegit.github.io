import PropTypes from 'prop-types';
import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import rss from '../assets/svg/rss.svg';
import { getTagPath } from '../utils/tag';

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const title = `${frontmatter.title} | ${data.site.siteMetadata.title}`;
  const link = `${data.site.siteMetadata.siteUrl}${frontmatter.path}`;
  const encodedLink = encodeURIComponent(link);
  const encodedTitle = encodeURIComponent(frontmatter.title);
  const shareLinks = [
    {
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedLink}`,
      label: 'Twitter',
    },
    {
      href: `https://www.reddit.com/submit?title=${encodedTitle}&url=${encodedLink}`,
      label: 'Reddit',
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedLink}`,
      label: 'LinkedIn',
    },
    {
      href: `mailto:?subject=${encodedTitle}&body=${encodedLink}`,
      label: 'Email',
    },
  ];

  return (
    <div className="blog-post-container">
      <Helmet title={title} />
      <div className="blog-post">
        <h1 className="blog-post__title">{frontmatter.title}</h1>
        <div className="blog-post__date">
          {frontmatter.date} &mdash;
          <ul className="simple-share-list" aria-label="Share links">
            {shareLinks.map(shareLink => (
              <li key={shareLink.label}>
                <a href={shareLink.href} target="_blank" rel="noopener noreferrer">
                  {shareLink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="blog-post__footer">
        {frontmatter.tags && (
          <ul className="blog-post__tags">
            Tags:{' '}
            {frontmatter.tags.map((tag, index) => (
              <li key={index}>
                <Link to={getTagPath(tag)}>{tag}</Link>
              </li>
            ))}
          </ul>
        )}
        <p>
          <a href="/rss.xml">
            <i>Stay updated with RSS:</i> <img src={rss} height="13px" width="13px" alt="RSS logo" />
          </a>
        </p>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($postPath: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
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
`;

Template.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
