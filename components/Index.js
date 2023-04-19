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
                I am currently accepting new clients (note that I do not provide assessment services, and am not accepting
                new clients under the age of 18). New and existing clients can make appointments either online
                through <router-link to="/Booking">the booking page</router-link>, or through the
                <a href="https://www.halaxy.com/profile/virtus-psychology/location/626281" target="_blank">Halaxy online portal</a>.
                To make an inquiry, or for assistance in booking an appointment, please contact me via email at
                <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
                via SMS at <a href="sms:0491023019">0491 023 019</a>. 
                <br><br>
                <p>I believe that mental health can be viewed in terms of internal conflict, and that avoiding or suppressing
                distressing emotions or thinking patterns can lead to paradoxical outcomes. I think it's important to realise
                that there are no strictly positive or negative emotions or thinking patterns, and to understand how each can be
                useful or not useful depending on the context. By understanding the positive aspects of an emotion or way of thinking,
                we can respond to it differently. By allowing all aspects of ourselves to be present and honoured, we can create a more
                harmonious and balanced internal landscape.
                <br><br>
                <details><summary>Click here to read a longer version of the above.</summary>
                <br><p>I think it can be helpful to view mental health not as a pathology, but in terms of internal conflict. This internal conflict
                might be conscious (e.g. the way you think and feel about things changes in different situations), or subconscious
                (e.g. you are experiencing an emotion or thinking pattern which you aren't finding helpful, or wish you didn't have).
                <br><br>
                An idea which I believe is relevant to this view of mental health is that many things exist in a spectrum,
                with each end of the spectrum being complementary, interconnected, in a constant
                state of motion, and with each end of the spectrum transforming into the other.
                <br><br>
                As an example which everyone
                can relate to, there is the sleep/wake cycle. Alertness and sleepiness can be seen as two opposing states that are
                interconnected and in constant flux, with one state leading to the other. The more time you spend awake, the sleepier
                you become, and the more time you spend asleep, the more alert you can be. If a person tried to always be alert, they
                would paradoxically become very sleepy, and if a person tried to sleep as much as possible, they may not be able to
                sleep much at all.
                <br><br>
                The key ideas are that each part of the spectrum is helpful in the right context, and resisting the natural flow
                can have a paradoxical outcome.
                <br><br>
                I think that this idea applies to mental health, as well. If we look at all of the emotions and thinking patterns
                the human brain generates, it makes sense to say that due to evolutionary pressure, they can all be useful or helpful
                in the right context (e.g. aversive emotions can be useful in getting us to avoid situations which might be bad for our
                survival, and pleasant emotions can be useful in getting us to pursue situations which might be good for our survival).
                I also think that
                avoiding or suppressing distressing emotions or thinking patterns can lead to paradoxical outcomes.
                <br><br>
                If we view mental
                health in terms of internal conflict, I think it makes sense to say that any internal conflict involves two parts of
                the brain/mind responding in ways which are conflicting, with each part responding appropriately in some context.
                <br><br>
                As a concrete example, imagine that your mind wants you to seek out ice-cream, and avoid a particular person who
                isn't nice to you. Both of these drives make sense, but when you see this person selling ice-cream, you might start
                to experience internal conflict, even though both of these drives still make sense in their own context.
                <br><br>
                This is an example of conscious internal conflict (e.g. part of you wants to go buy an ice-cream, part of you doesn't),
                but the internal conflict can be subconscious as well. Human minds are great at learning to do things like breathe,
                walk, and drive, without much need for conscious control. In the same way, human minds can learn that it is appropriate
                to feel or think in certain ways, without there being much conscious decision making or control.
                <br><br>
                Elephant minds do
                this as well (along with probably many other species, whose psychology I haven't studied). As baby elephants learn
                that they can't pull a stake out of the ground, the decision to not try to pull the stake out of the ground becomes
                more and more automatic, and less and less conscious or deliberate. This means that the decision to not try
                to pull the stake out of the ground is made automatically and outside of conscious awareness, even when that is no longer
                the best decision to
                make.
                <br><br>
                <img src="./assets/elephant.webp" title="The elephant's subconscious mind mistakenly believes it is helpful to not pull on the stake" style="width:150px;">
                <br><br>
                If you consciously think about breathing, you are able to control your breath. However, if you distract, avoid, or
                suppress your awareness of your breath, you will not be able to control it. Awareness is crucial, and without an
                acceptance and curiosity for distressing emotions or thinking patterns, there will be limited awareness of the reasons
                the mind thinks those emotions or thinking patterns are helpful.
                <br><br>
                If we say that all emotions and thinking patterns are potentially helpful, this leaves us with two possibilities when
                a distressing emotion or thinking pattern arises. Either it is helpful, and ignoring it would not be in our best
                interests (e.g. ignoring fear in a dangerous situation can result in less than ideal outcomes). Or, it is unhelpful,
                which means that there is some part of the brain/mind which mistakenly believes it is helpful. In both cases,
                avoiding or suppressing the distressing emotion or thinking pattern will cause it to persist. This is consistent with
                research which indicates that individuals
                with a mood disorder are significantly more likely to view distressing emotions as intrinsically negative, and to
                attempt to avoid or suppress those emotions.
                <br><br>
                Going back to the idea of many things being cyclical, it makes sense to say that trying to avoid or suppress distressing
                emotions or thinking patterns is a bit like trying to stay awake all of the time. It can paradoxically
                end up creating more internal
                conflict and suffering. This also applies to the experience of craving a "magic bullet" which will make everything
                better - this craving itself creates suffering.
                <br><br>
                Another interesting thing about the human mind is that these subconscious decision-making processes (this is also
                called implicit knowledge) respond to vivid imaginations as if they were really happening. This is why you can develop
                motor learning skill by imaginging yourself doing something technical, why we can sometimes forget that our thoughts
                aren't necessarily reality, and why there can be healing experiences driven by visualisation.
                <br><br>
                In summary, I think it can be helpful to be aware, accepting, and understanding of what our mind is doing.
                <br><br>
                Sometimes this might mean exploring distressing thoughts and emotions. If we bring all of the
                implicit knowledge which necessitates the distressing emotion or thinking pattern out of the subconscious and
                into our awareness, we can integrate it into our conscious experience,
                either by learning from it, or by allowing it to be updated. When we allow
                ourselves to feel and explore our emotions, we create space for greater self-awareness, healing, and integration.
                <br><br>
                However, just as it can be unhelpful to always avoid or suppress distressing emotions or thinking patterns, it can also
                be unhelpful to always explore them. Exploration can be an overwhelming or confronting
                process, and like all activities of the mind, the instinct to avoid or suppress distressing emotions or thinking
                patterns can be useful in the right context.
                <br><br>
                By allowing all aspects of ourselves to be present and honoured, we can create a more
                harmonious and balanced internal landscape.
                <br><br>
                </p>
                </details>
            </div>
        </div>
    </div>`
});
