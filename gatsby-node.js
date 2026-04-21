const path = require('path');

const getTagSlug = tag =>
  tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`src/templates/post.js`);
  const tagTemplate = path.resolve(`src/templates/tag.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 2000) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const createdTags = new Set();

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        postPath: node.frontmatter.path,
      },
    });

    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        const tagSlug = getTagSlug(tag);

        if (createdTags.has(tagSlug)) {
          return;
        }

        createdTags.add(tagSlug);

        createPage({
          path: `/tags/${tagSlug}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });
    }
  });
};
