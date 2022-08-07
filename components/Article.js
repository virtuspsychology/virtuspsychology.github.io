const Article = Vue.component('article', {
    props: ['id'],
    data() {
        return {
            content: null
        }
    },
    async created() {
        const id = this.$route.params.id;
        const response = await fetch(`components/Articles/${id}.json`);
        if (response.ok){
            const content = await response.json();
            this.content = content;
        } else {
            router.push("/Invalid");
        }
        
    },
    // methods : {
    //     loadContent(){
    //         import("./Articles/" + this.id + ".json").then((module) => {
    //             console.log(module);
    //             this.content = module;
    //         }); 
    //     }
    // },
    // mounted(){
    //     this.loadContent();

    // },
    template: `<div class="page-outer-frame">
    <div class="lander-filler"></div>
    <div v-if="content" class="page-inner-frame">
    <br><br>
    <h3>{{ this.content.title }}</h3>
    <br><br>
    {{ this.content.text }}
    </div>
    </div>`
});
