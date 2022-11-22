const Article = Vue.component('article', {
    props: ['id'],
    data() {
        return {
            content: null
        }
    },
    async created() {
        const id = this.$route.params.id;
        const response = await fetch(`components/Articles/${id}.html`);
        if (response.ok){
            const content = await response.text();
            this.content = content;
        } else {
            router.push("/Invalid");
        }
        
    },
    template: `<div class="page-outer-frame">
    <div class="lander-filler"></div>
    <div v-if="content" class="page-inner-frame">
    <br><br>
    <div v-html="this.content"></div>
    </div>
    </div>`
});
