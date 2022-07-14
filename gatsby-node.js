const path = require("path")

exports.createPages = async function ({ actions, graphql}){
    const {data} = await graphql(`
    query createPages{
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)

      data.allMarkdownRemark.edges.forEach( edge => {
        const slug = edge.node.frontmatter.slug
        actions.createPage({
            path: `/articles/${slug}`,
            component: path.resolve(`./src/templates/ArticlesTemplate.jsx`),
            context: {slug: slug}
        })
      })

}