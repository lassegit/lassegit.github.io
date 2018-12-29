import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import ShareOnTwitter from '../components/ShareOnTwitter';
import rss from '../assets/svg/rss.svg';
import twitter from '../assets/svg/twitter.svg';
import SocialShare from 'react-simple-social';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const tags = frontmatter.tags;
  const title = `${frontmatter.title} | ${data.site.siteMetadata.title}`;
  const link = `${data.site.siteMetadata.siteUrl}${frontmatter.path}`;

  return (
    <div className="blog-post-container">
      <Helmet title={title} />
      <div className="blog-post">
        <h1 className="blog-post__title">{frontmatter.title}</h1>
        <div className="blog-post__date">
          {frontmatter.date} &mdash;
          <SocialShare
            url={link}
            title={frontmatter.title}
            sites={['twitter', 'reddit', 'linkedin', 'email']}
            color="gray"
            theme="minimal"
            width="14"
            height="14"
          />
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className="blog-post__footer">
        {tags &&
          tags.length && (
            <ul className="blog-post__tags">
              Tags:{' '}
              {tags.map((tag, index) => (
                <li key={index}>
                  <Link to={`/tags/${tag}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          )}
        <p>
          <a href="/rss.xml">
            <i>Stay updated with RSS:</i>{' '}
            <img src={rss} height="13px" width="13px" />
          </a>
        </p>
        <p>
          <a href="https://twitter.com/intent/follow?screen_name=lasse_tech">
            <i>Follow me on Twitter:</i>{' '}
            <img src={twitter} height="13px" width="13px" />
          </a>
        </p>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        siteUrl
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
`;
