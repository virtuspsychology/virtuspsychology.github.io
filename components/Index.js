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
    <h2 class="lander-text">Canberra Psychologist offering adult, adolescent, and child therapy to help manage stress, anxiety, and depression.</h2>
    <p class="lander-text">Contact David via email at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or via SMS at
    <a href="sms:0491023019">0491 023 019</a> to request an appointment or make an inquiry.</p>
    </span>
    <div @click="scrollToContent" class="bounce">
    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60"><path class="arrow" d="M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4z"/></svg>
    </div>
    </div>
    <div class="page-inner-frame">
    <div class="page-content" id="content">
    David O'Donohue is a registered psychologist with a Master's degree in clinical psychology.
    He has experience helping both adults and children manage and reduce symptoms of stress, anxiety, and depression.
    <br><br>
    David uses the Unified Protocol model of therapy, a recently developed and evidence-based approach which attempts
    to combine the most useful and effective elements of CBT (cognitive behavioural therapy), ACT (acceptance and commitment therapy),
    and DBT (dialectical behaviour therapy).
    His primary focus will be to understand your individual and unique circumstances, and work with
    you to help you meet your goals.
    <br><br>
    David is currently accepting mental health care plan referred and self-referred clients experiencing symptoms related to
    stress, anxiety, and depression. Appointments are available in-person on Mondays, with telehealth coming soon.
    <br><br>
    To request an appointment or make an inquiry, please contact David via email at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
    via SMS at <a href="sms:0491023019">0491 023 019</a>.
    </div>
    </div>
    </div>`
});
