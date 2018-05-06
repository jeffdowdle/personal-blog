exports.ARTICLES_BASE_URL = '/articles'; 

exports.buildArticleUrl = (articleId, articleSlug) => {
    return `${exports.ARTICLES_BASE_URL}/${articleSlug}-${articleId}`
}