const path = require(`path`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { data } = await graphql(`
    {
      allStrapiQuiz {
        nodes {
          id: strapiId
          slug
          category {
            id
          }
        }
      }
      allStrapiCategory {
        nodes {
          id: strapiId
          slug
        }
      }
      allStrapiPage {
        nodes {
          id: strapiId
          title
          slug
        }
      }
    }
  `)
  data.allStrapiQuiz.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/single-quiz.jsx`),
      context: {
        id: node.id,
        categoryId: node.category ? node.category.id : null,
      },
    })
  })
  data.allStrapiCategory.nodes.forEach(node => {
    createPage({
      path: `category/${node.slug}`,
      component: path.resolve(`./src/templates/single-category.jsx`),
      context: {
        id: node.id,
      },
    })
  })
  data.allStrapiPage.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/single-page.jsx`),
      context: {
        id: node.id,
      },
    })
  })
}
