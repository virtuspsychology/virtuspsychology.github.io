const Index = Vue.component('index', {
    methods: {
        scrollToContent(){
            var yValue = window.innerHeight - 50;
            window.scrollTo({top:yValue, behavior: 'smooth'});
        }
    },
    data() {
        return {
            images: [
            "./assets/yoga.webp",
            "./assets/balance.webp",
            "./assets/lotus.webp",
            "./assets/ripple.webp",
            "./assets/lotus2.webp"
            ]
        }
    },
    computed: {
        backgroundStyle(){
            var index = Math.floor(Math.random() * this.images.length);
            return "background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(" + this.images[index] + ");";
            //return "background-image: url(" + this.images[index] + ");";
        }
    },
    template: `<div class="page-outer-frame">
    <div class="lander" :style="backgroundStyle">
    <span class="lander-visuals">
    <h1 class="lander-text">David O'Donohue</h1>
    <p class="lander-text">Trauma-informed Psychologist</p>
    <div @click="scrollToContent" class="bounce">
    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60"><path class="arrow" d="M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4z"/></svg>
    </div>
    </span>
    </div>
    <div class="page-inner-frame">
    <div class="page-content" id="content">
    Hello! My name is David O'Donohue, and I am a registered psychologist and clinical psychology registrar.
    <br><br>
    My main area of interest is in trauma processing, and the resolution of internal conflict which results
    from complex trauma. Sometimes it can feel like your mind is working against you. Whether it's the emergence of feelings which
    are unwanted, thoughts which are unwanted, or impulses which are unwanted, a deeper understanding of the mind often reveals
    that each of these unwanted processes have a positive intention for you. I aim to help clients understand the parts
    of their mind, the intentions or functions of those parts, and eventually to bring each part into harmony. The goal is for the mind to work
    with itself, rather than against itself.
    I aspire to be reflective, curious, compassionate, and non-judgemental in my approach.
    <br><br>
    I am currently accepting new clients. New and existing clients can make appointments either online
    through <router-link to="/Booking">the booking page</router-link>, or through the
    <a href="https://www.halaxy.com/profile/virtus-psychology/location/626281" target="_blank">Halaxy online portal</a>.
    To make an inquiry, or for assistance in booking an appointment, please contact me via email at
    <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
    via SMS at <a href="sms:0491023019">0491 023 019</a>.
    </div>
    </div>
    </div>`
});