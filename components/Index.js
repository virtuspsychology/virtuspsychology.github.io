const Index = Vue.component('index', {
    methods: {
        scrollToContent(){
            var yValue = window.innerHeight - 50;
            window.scrollTo({top:yValue, behavior: 'smooth'});
        },
        toggle(event, id){
            console.log("event: ", event)
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
    template: `
    <div class="page-outer-frame">
        <div class="lander" :style="backgroundStyle">
            <span class="lander-visuals">
                <h1 class="lander-text">David O'Donohue</h1><br><h3 class="lander-text"> Psychologist | Clinical Psychology Registrar</h3>
                <p class="lander-text">To book an appointment, visit the <router-link to="/Booking">booking page</router-link>, or email
                David at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a>.</p>
                <div @click="scrollToContent" class="bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60"><path class="arrow" d="M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4z"/></svg>
                </div>
            </span>
        </div>
        <div class="page-inner-frame">
            <div class="page-content" id="content">
            <img src="profile.webp" alt="image" class="avatar" title="Here is a photo of me, in case you were wondering">
            Hello! My name is David O'Donohue, and I am a registered psychologist and clinical psychology registrar.
            I am not currently accepting new clients. Existing clients can make appointments either online
            through <router-link to="/Booking">the booking page</router-link>, or through the
            <a href="https://www.halaxy.com/profile/virtus-psychology/location/626281" target="_blank">Halaxy online portal</a>.
            To make an inquiry, or for assistance in booking an appointment, please contact me via email at
            <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
            via SMS at <a href="sms:0491023019">0491 023 019</a>. I don't have a receptionist, so I usually can't answer calls or
            respond immediately, but I can respond to emails and SMS when time allows.
        </div>
    </div>`
});