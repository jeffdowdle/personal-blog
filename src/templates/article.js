import React from 'react'
import Link from 'gatsby-link'

const ArticlePage = ({data}) => {
    const article = data.contentfulArticle;
    const articleHtml = article.body.childMarkdownRemark.html;

    return (
        <React.Fragment>
            <h1>{article.title}</h1>
            <p>{article.subtitle}</p>
            <div dangerouslySetInnerHTML={{__html: articleHtml}} />
        </React.Fragment>
    )
}

export const pageQuery = graphql`
    query ArticleQuery($articleId: String!) {
        contentfulArticle(id: { eq: $articleId }) {
            title
            subtitle
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

export default ArticlePage
