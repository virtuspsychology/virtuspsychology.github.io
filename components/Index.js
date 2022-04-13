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
    <h1 class="lander-text">Trauma-informed psychology</h1>
    <p class="lander-text">To book an appointment, visit the <router-link to="/Booking">booking page</router-link>, or email
    David at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a>.
    <div @click="scrollToContent" class="bounce">
    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60"><path class="arrow" d="M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4z"/></svg>
    </div>
    </span>
    </div>
    <div class="page-inner-frame">
    <div class="page-content" id="content">
    Hello! My name is David O'Donohue, and I am a registered psychologist and clinical psychology registrar.
    <br><br>
    My main area of interest is complex trauma. Our minds generate a range of different thoughts, feelings, and impulses, all of
    which have evolved because they are beneficial to our success as a species. Anxiety protects us against danger, sadness protects
    us against wasting limited resources, and anger gives us the energy to improve an unfair situation. Sometimes, our mind learns
    that a certain emotion is either unacceptable (because any effect of that emotion leads to drastically negative outcomes,
    e.g. "I'll give you something to cry about" can lead to the idea that sadness is unacceptable), or vital (because the absence
    of that emotion leads to drastically negative outcomes, e.g. "If I'm not anxious, I will miss the warning signs of danger").
    When the mind is no longer free to let emotions come and go, and instead either needs an particular emotion to be present
    all of the time or never at all, some unpleasant consequences can result.
    <br><br>
    If an emotion is deemed unacceptable, the experience of the emotion will be greatly intensified.
    If you think that anxiety is ruining your life, you
    might get anxious about being anxious. If you think that sadness is a sign of weakness, or a sign that you will never
    enjoy anything, you might get sad about being sad. If you hate how angry you are, you might get angry when you feel the beginnings
    of anger. Or, any combination of distressing emotion in response to a distressing emotion, leading to an intensely unpleasant
    experience, confirming your mind's conscious or unconscious predictions about the emotion.
    <br><br>
    If an emotion is deemed vital, our mind can get into the habit of maintaining this emotion,
    and over the years the original need for the emotion can be forgotten. If this emotion is unpleasant, we may develop some
    resentment or resistance to the emotion, which can feed into the cycle that the above paragraph illustrates.
    <br><br>
    Many people enter therapy with the goal of eliminating the unpleasant emotion. However, it is often this goal which perpetuates
    the distress, because it results in a much more intense experience of the emotion when it does arise. I envision the goal of
    therapy to be a reduction in the intensity of the distress, by paradoxically being more accepting and tolerant of the emotion.
    Becoming aware of pre-conscious mental processes and understanding their history and function can lead to a place where 
    compassion and gratitude can be felt for the previously unwanted emotions. Imagery rescripting can help to set these processes
    on a more adaptive track, through memory reconsolidation.
    <br><br>
    A quick note on judgement and shame: being judged or feeling shamed for the unwanted emotion, or a behaviour aimed at
    eliminating the unwanted emotion, is a very common precursor to the kind of mental health stuggles identified above, and so it can
    be normal for the mind to anticipate being judged by a therapist. In my mind, judgement arises under several possible conditions.
    Firstly, feeling judgemental is a psychological defence against feeling inferior to someone. Feeling inferior can be distressing,
    and so finding something to judge that person on can be soothing. Secondly, a person may not have enough information to understand
    a course of action, and without understanding the reasons behind a course of action, a negative judgement can bridge the gap and
    reduce uncertainty ("I don't understand why this person did that" compared to "this person did that because they are [negative
    judgement]"). Thirdly, a person may have internalised a strong inner critic, and may display that critic to others as well.
    Knowing these things about why judgement might arise can allow you to look at any judgemental thoughts that your mind generates
    and think, "what are these thoughts protecting me from?". As such, I typically don't judge clients for anything at all. However,
    this is not to say that I think that the fear of being judged is bad in some way - if it is present,
    it is probably being generated from a place of
    self-protection, and this place has likely been quite useful in the past.
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