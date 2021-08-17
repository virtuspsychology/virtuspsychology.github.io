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
            "./assets/ripple.webp"
            ]
        }
    },
    computed: {
        backgroundStyle(){
            var index = Math.floor(Math.random() * this.images.length);
            return "background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(" + this.images[index] + ");";
        }
    },
    template: `<div class="page-outer-frame">
    <div class="lander" :style="backgroundStyle">
    <span></span>
    <span>
    <h2 class="lander-text">Canberra Psychologist offering adult, adolescent, and child therapy for
    depression, anxiety, stress, complex trauma and PTSD, relationship and attachment issues,
    and chronic pain.</h2>
    <p class="lander-text">Appointments can be booked through
    <router-link to="/Booking">the booking page</router-link>, or through the
    <a href="https://www.halaxy.com/profile/virtus-psychology/location/626281" target="_blank">Halaxy online portal</a>.
    <br><br>
    To make an inquiry, or for assistance in booking an appointment, please contact David via email at
    <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or via SMS at
    <a href="sms:0491023019">0491 023 019</a></p>
    </span>
    <div @click="scrollToContent" class="bounce">
    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60"><path class="arrow" d="M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4z"/></svg>
    </div>
    </div>
    <div class="page-inner-frame">
    <div class="page-content" id="content">
    <div class="important-info">
    COVID-19 information: In-person sessions will recommence on Wednesday 1st September.
    To help prevent the spread of COVID-19, the following precautions will be made:<br>
    <ul>
    <li>David has received both Pfizer COVID-19 vaccinations</li>
    <li>Payment and bookings are fully contactless</li>
    <li>Telehealth appointments are available, and existing appointments can be swapped to telehealth appointments</li>
    <li>Masks should be worn during sessions</li>
    <li>Rebookings and cancellations are accepted without the cancellation fee</li>
    <li>If you are sick, please either swap to telehealth, cancel, or reschedule your appointment</li>
    </ul>
    </div>
    David O'Donohue is a registered psychologist and a clinical psychology registrar
    with a Master's degree in clinical psychology.
    He has experience helping adults, adolescents, and children manage their mental health.
    <br><br>
    David uses an integrative approach which synthesises theory and evidence from eye movement
    desensitisation and reprocessing (EMDR), cognitive behavioural therapy (CBT), acceptance and
    commitment therapy (ACT), schema therapy, coherence therapy, cognitive processing therapy,
    narrative therapy, mindfulness, gestalt therapy, neuroscience, focusing, internal family systems
    therapy, Buddhism, and Stoicism.
    <br><br>
    David's main areas of interest are interventions which result in lasting changes to activity patterns
    in the default mode network, and the insight into and resolution of conscious or subconscious
    internal conflicts.
    <br><br>
    Appointments can be booked through
    <router-link to="/Booking">the booking page</router-link>, or through the
    <a href="https://www.halaxy.com/profile/virtus-psychology/location/626281" target="_blank">Halaxy online portal</a>.
    To make an inquiry, or for assistance in booking an appointment, please contact David via email at
    <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
    via SMS at <a href="sms:0491023019">0491 023 019</a>.
    </div>
    </div>
    </div>`
});