
const path = require('path');
const {buildArticleUrl} = require('./src/utils')

exports.createPages = ({
    graphql,
    boundActionCreators
}) => {
    const {
        createPage
    } = boundActionCreators

    // GraphQL query to get all 'Article' entries from contentful
    const query = `
    {
        allContentfulArticle {
            edges {
                node {
                    id
                }
            }
        }
    }
    `

    const articleTemplate = path.resolve(`src/templates/article.js`)

    return new Promise((resolve, reject) => {
        
        resolve(
            graphql(query).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                // Create each article page
                // Send the article's id as 'context', which is used in the article template page query.
                result.data.allContentfulArticle.edges.forEach(({ node }) => {
                    createPage({
                        path: buildArticleUrl(node.id, node.slug),
                        component: articleTemplate,
                        context: {
                            articleId: node.id,
                        },
                    })
                })

                return
            })
        )
    })
}