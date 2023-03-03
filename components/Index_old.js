const Index = Vue.component('index', {
    methods: {
        scrollToContent(){
            var yValue = window.innerHeight - 50;
            window.scrollTo({top:yValue, behavior: 'smooth'});
        },
        toggle(event, id){
            console.log("event: ", event)
        },
        scrollToSection(section) {
            this.$refs[section].scrollIntoView({ behavior: "smooth" })
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
                via SMS at <a href="sms:0491023019">0491 023 019</a>.
                <br><br>
                If you are a potential client who is looking for a psychologist, I can recommend
                <a href="https://flexiblepsyche.com.au" target="_blank">Rosalie Poesiat at Flexible Psyche</a>, who is currently
                taking on new clients. I can also recommend any of the psychologists at either
                <a href="https://www.lanternpsychology.com.au/" target="_blank">Lantern Psychology Centre</a> or
                <a href="https://capitalclinicalpsychology.com/about-dr-torres/our-practitioners/" target="_blank">Capital Clinical Psychology</a>.
                <br><br>
                <h3>Contents</h3><br><br>
                <button class="contents-button" ref="summary" @click="scrollToSection('summary')">Summary</button><br>
                <button class="contents-button" ref="mental-health" @click="scrollToSection('mental-health')">Defining mental health</button><br>
                <button class="contents-button" ref="dopamine-association" @click="scrollToSection('dopamine-association')">Dopamine and associations</button><br>
                <button class="contents-button" ref="implicit-memory" @click="scrollToSection('implicit-memory')">Subconscious top down processing</button><br>
                <button class="contents-button" ref="useful-emotions" @click="scrollToSection('useful-emotions')">Function of emotions</button><br>
                <button class="contents-button" ref="useful-beliefs" @click="scrollToSection('useful-beliefs')">Usefulness of beliefs and interpretations</button><br>
                <button class="contents-button" ref="paradox-dialectics" @click="scrollToSection('paradox-dialectics')">Paradoxes and acceptance</button><br>
                <button class="contents-button" ref="attention-memory" @click="scrollToSection('attention-memory')">Emotional intensity, attention, memory, integrating information</button><br>
                <button class="contents-button" ref="mindfulness" @click="scrollToSection('mindfulness')">Mindfulness</button><br>
                <button class="contents-button" ref="imagery" @click="scrollToSection('imagery')">Imagery</button><br>
                <br>
                <span ref="summary">
                    <h3>Summary</h3><br>
                    Text
                </span>
                <br><br>
                <span ref="mental-health">
                    <h3>What is mental health?</h3><br>
                    There is a book called the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders), which at the moment
                    is how mental disorders are defined. I think there are some positives to this, and some negatives.
                    <br><br>
                    The positives I see are that, if you have a diagnosis, you can get a sense that other people have gone through
                    something similar to what you are going through. You can also look into what may have worked for those people.
                    <br><br>
                    The negatives I see are that the book describes "disorders". In reality, people who meet the criteria for one
                    of these "disorders" are usually just responding to their experiences in a way which makes perfect sense and
                    was adaptive at one point in time. Also, there is a lot of research which indicates that the categories aren't
                    as helpful as you might expect. Currently it seems like 1) experiencing strong emotions, 2) viewing some emotions
                    as intrinsically bad, and 3) trying to suppress or avoid those emotions, are all significant predictors of a range
                    of different depressive and anxious "disorders", as well as "borderline personality disorder", and there are some
                    components of therapy which are helpful for a range of different "disorders".
                    <br><br>
                    So, if we don't fully accept the DSM, what is mental health? What sort of things indicate someone might benefit
                    from a psychologist, and what might the benefit look like?
                    <br><br>
                    Emotions like anger, sadness, and fear don't seem to be intrinsically bad - people go on rollercoasters,
                    or watch movies, or listen to songs, or attend competitive events, where these emotions are expected and enjoyed.
                    It seems like there is emotion, and then there is suffering.
                    <br><br>
                    In my experience, suffering takes three forms:<br>
                    <ul>
                    <li>Identification with a part of the mind that wants another part of the mind to be different</li>
                    <li>Alternating between identifying with two parts of the mind, each of which wants the other part
                    to be different</li>
                    <li>Identification with a part of the mind which wants to hold onto or achieve something</li>
                    </ul>
                    <br>
                    
                    
                    This first form is when a person has a certain emotional reaction
                    to something, but also feels like they shouldn't have that reaction. We could say that a part of their mind
                    thinks it is valid to have this emotional reaction, and a part of their mind believes it isn't valid, and the
                    person identifies with the idea that the reaction isn't valid. Some examples of this would be feeling like you
                    want less fear, less sadness, or less anger. It also includes identifying with each part of the mind at different
                    points in time, like feeling like you should do a particular thing at one point, and then later feeling like you
                    don't like that you did that thing.
                    <br><br>
                    The second form is when there isn't any internal conflict, but 
                    <br><br>
                    I think it makes sense to say that <span class="bold">suffering is identifying with an attachment to the idea
                    that things should be a certain way</span>. This is probably quite vague, but hopefully will make sense by the
                    end of the page.
                    <br><br>
                    This definition would include having a feeling, such as fear, sadness, or anger, and not wanting to have that feeling.
                    This would also include the feeling that everything would be solved if you manage to get a particular job
                    or relationship or status., or craving/delusion
                </span>
                <br><br>
                <span ref="parts">
                    <h3>Parts of the mind</h3><br>
                    Text
                </span>
                <br><br>
                <span ref="paradox">
                    <h3>Paradoxes and dialectics</h3><br>
                    Text
                </span>
            </div>
            
        </div>
    </div>`
});