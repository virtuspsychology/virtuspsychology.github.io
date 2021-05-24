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
    David uses an integrative approach which combines theory and evidence from cognitive behavioural therapy,
    acceptance and commitment therapy, mindfulness, schema therapy, coherence therapy, gestalt therapy, neuroscience, focusing, internal family systems therapy,
    Buddhism, and Stoicism. David focuses on the insight into and resolution of internal conflicts, many of which
    may not be conscious.
    <br><br>
    Internal conflicts can arise in all sorts of situations. Let's say you like ice-cream, but the cashier at
    the ice-cream store is unpleasant to you. There is a specific set of neurons in your reward circuit which
    is driving you towards the ice-cream store, and a (different) specific set of neurons driving you
    away from the store. So, a part of your brain wants one thing, and another part wants another thing.
    No matter what you do, there will be a dopamine shortfall in at least one region of your reward circuit.
    <br><br>
    We evolved emotions because they help motivate our behaviour towards what we need for survival. 
    The purpose of anxiety is to keep us safe, by making us look for and respond to danger.
    The purpose of anger is to give us the energy to fight for something important to us.
    The purpose of sadness is less obvious, but what would happen if we were born without the ability to feel
    sadness? No one would know when bad things were happening to us - because we wouldn't even know. Sadness
    motivates us to seek support, and to take some time out to process when things go wrong. Even shame
    has a purpose - it encourages us to refrain from behaviour which would have negative social repercussions.
    <br><br>
    Problems can occur when the parts of our brains which produce emotions are in conflict with
    each other. For example, when a part of our brain believes a painful emotion (such as sadness, anxiety, 
    or anger) is necessary and useful, and another part of our brain wants the suffering to stop, and
    doesn't see the emotion as useful or necessary.
    <br><br>
    Integrating these parts requires a <span class="bold">compassionate</span> exploration of each.
    Each part hinges on different emotional memories and beliefs, and each has your best interests at heart.
    It also requires us to hold multiple contradictory or painful thoughts in consciousness at once,
    without accepting or rejecting them - <span class="bold">cognitive defusion</span> helps with this. 
    <span class="bold">Mindfulness</span> helps to develop increased introspective awareness, allowing us to
    more easily notice the thoughts, memories, and emotions which previously slipped past undetected.
    <span class="bold">Gratitude</span> helps to strengthen the neural networks involved in recognising
    positive things, gradually leading to an increase in positive emotion. 
    <br><br>
    To request an appointment or make an inquiry, please contact David via email at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
    via SMS at <a href="sms:0491023019">0491 023 019</a>.
    </div>
    </div>
    </div>`
});

// David is currently accepting mental health care plan referred and self-referred clients experiencing symptoms related to
// stress, anxiety, and depression. Appointments are available in-person on Mondays, with telehealth coming soon.
// <br><br>