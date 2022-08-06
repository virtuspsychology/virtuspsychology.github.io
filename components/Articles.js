const Articles = Vue.component('articles', {
    data() {
        return {
            articles: [
            "equanimity"
            ]
        }
    },
    template: `<div class="page-outer-frame">
    <div class="lander-filler"></div>
    <div class="page-inner-frame">
    <div class="hero-image" style="background-image: url('./assets/books.webp')">
    <div class="hero-text">
    <h1 class="title">Articles</h1>
    </div>
    </div>
    <div class="page-content">
    <span>
    <p v-for="article in articles">{{article.title}}</p>
    </span>
    </div>
    </div>
    </div>`
});
