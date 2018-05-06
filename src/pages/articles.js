import React from 'react'
import Link from 'gatsby-link'
import {buildArticleUrl} from '../utils';

const ArticlesPage = ({data}) => {
    const articles = data.allContentfulArticle.edges;

    return (
        <ul>
            {articles.map(({ node }) => {
                return (
                    <li>
                        <h2>{node.title}</h2>
                        <p>{node.subtitle}</p>
                        <Link to={buildArticleUrl(node.id, node.slug)}>Go to article</Link>
                    </li>
                );
            })}
        </ul>
    )
}

export const pageQuery = graphql`
    query ArticlesQuery {
        allContentfulArticle {
            edges {
                node {
                    id
                    slug
                    title
                    subtitle
                }
            }
        }
    }
`

export default ArticlesPage
