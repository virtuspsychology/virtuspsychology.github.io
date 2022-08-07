const Article = Vue.component('article', {
    props: ['id'],
    data() {
        return {
            content: null
        }
    },
    async created() {
        const id = this.$route.params.id;
        console.log("id: ", id);
        const response = await fetch(`components/Articles/${id}.json`);
        console.log("response: ", response);
        const content = await response.json();
        console.log("content: ", content);
        this.content = content;
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
    <br><br>
    <h3>{{ this.content.title }}</h3>
    <br><br>
    {{ this.content.text }}
    </div>
    </div>`
});
