const ArticleTile = Vue.component('article-tile', {
    props: ['article'],
    template: `{{article.title}}`
});
