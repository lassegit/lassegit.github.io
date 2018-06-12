/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve(`src/templates/post.js`)
  const tagTemplate = path.resolve(`src/templates/tag.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
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
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Add blog page
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {},
      })

      // Adding page for each for the tags
      const tags = node.frontmatter.tags
      if (tags) {
        for (var i = 0; i < tags.length; i++) {
          const tag = tags[i]

          createPage({
            path: `/tags/${tag}`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        }
      }
    })
  })
}
