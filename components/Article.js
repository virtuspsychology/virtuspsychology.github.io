const Article = Vue.component('article', {
    props: ['id'],
    data() {
        return {
            content: null
        }
    },
    async created() {
        const id = this.$route.params.id;
        // Assuming your JSON file in in the root directory
        const response = await fetch(`components/Articles/${id}.json`);
        const content = await response.json();
        this.content = content;
        console.log(this.content);
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
    <div class="page-inner-frame">
    <h3>{{ this.content.title }}</h3>
    <br><br>
    {{ this.content.text }}
    </div>
    </div>`
});
