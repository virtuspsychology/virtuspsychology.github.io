const Articles = Vue.component('articles', {
    data() {
        return {
            articles: [
            {title: "Equanimity", key: "equanimity", preview: "Nothing yet"},
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
    Here are some living articles which represent what I have learned or concluded about various concepts.
    <br><br>
    <ul>
    <article-tile v-for="article in articles" :prop=article></article-tile>
    </ul>
    </span>
    </div>
    </div>
    </div>`
});
