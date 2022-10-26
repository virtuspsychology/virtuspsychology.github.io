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
    <h1 class="lander-text">David O'Donohue</h1><br><h3 class="lander-text"> Psychologist | Clinical Psychology Registrar</h3>
    <p class="lander-text">To book an appointment, visit the <router-link to="/Booking">booking page</router-link>, or email
    David at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a>.
    <div @click="scrollToContent" class="bounce">
    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60"><path class="arrow" d="M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4z"/></svg>
    </div>
    </span>
    </div>
    <div class="page-inner-frame">
    <div class="page-content" id="content">
    <img src="profile.webp" alt="image" class="avatar" title="Here is a photo of me, in case you were wondering">
    Hello! My name is David O'Donohue, and I am a registered psychologist and clinical psychology registrar.
    I am currently accepting new clients. New and existing clients can make appointments either online
    through <router-link to="/Booking">the booking page</router-link>, or through the
    <a href="https://www.halaxy.com/profile/virtus-psychology/location/626281" target="_blank">Halaxy online portal</a>.
    To make an inquiry, or for assistance in booking an appointment, please contact me via email at
    <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
    via SMS at <a href="sms:0491023019">0491 023 019</a>. Some extra information about my practice
    is below.
    <br><br>
    Our minds generate a range of different thoughts, feelings, and impulses, all of
    which have evolved because they are beneficial to our success as a species. Anxiety protects us against danger, sadness protects
    us against wasting limited resources, and anger gives us the energy to improve an unfair situation. Mental health can suffer
    when a person forms a conditioned association between the sensations of a distressing emotion, and something catastrophic.
    This can happen when a child's parents respond to the child's normal emotions in an unhelpful way
    (because distressing emotions are learned to lead to more distress, e.g. "I'll give you something to cry about"),
    or when the child experiences a traumatic event (because the emotions become associated with that event).
    <br><br>
    This leads to a person <span class="bold">rejecting their internal experience</span>
    (because it has so much negative association), or <span class="bold">becoming so
    overwhelmed by their internal experience that all other internal experiences are drowned out</span>.
    These two processes can reinforce themselves and each other.
    <br><br>
    If the mind predicts a lot of
    distress will follow from an aspect of experience, having that experience will cause the mind to generate a lot of distress, which
    is then a self-fulfilling prophecy. This is on the level of reward/punishment association, but thoughts and beliefs
    can play into this as well.
    For example, if you think that anxiety is ruining your life, you
    might get anxious about being anxious. If you think that sadness is a sign of weakness, or a sign that you will never
    enjoy anything, you might get sad about being sad. If you hate how angry you are, you might get angry when you feel the beginnings
    of anger. Or, any combination of distressing emotion in response to a distressing emotion, leading to an intensely unpleasant
    experience, which again confirms your mind's conscious or unconscious predictions about the internal experience.
    <br><br>
    If the mind is overwhelmed by an internal experience to the extent that other internal experiences are drowned out, this
    can also be problematic. When you are anxious, you are more attuned to sources of danger, more likely to
    interpret things as dangerous, and more likely to remember or predict dangerous things.
    The same applies to sadness and anger. When the emotion takes over and starts changing our perceptions, predictions, and the theme
    of the memories that are brought up, it can reinforce the emotion, and lead to more suffering.
    <br><br>
    Where mental health suffers, there is typically a pattern in which a normal and tolerable internal experience begins and
    is quickly intensified to a level which feels intolerable. Then, the emotion is either repressed, or takes the driver's seat
    and propagates itself.
    <br><br>
    So, why not just repress, or eliminate the distressing emotion? This is something that many people try to do, and it is the initial
    goal of many people who start therapy. However, I think this is problematic as a goal. Firstly, I'm not sure if it is possible
    to completely eliminate a distressing emotion. Secondly, viewing the emotion as something which is intrinsically negative
    and something to be eliminated is one of the things which perpetuates suffering. Thirdly, the distress intolerance which results
    from distress leading to worse outcomes is the driving force behind many of the behaviours people come to therapy for in the first place, such as
    addiction, suicide, and self-harm. Finally, revisiting the reason we have
    distressing emotions in the first place, if we eliminate a distressing emotion, we lose the potential benefits it can bring us.
    People who attempt to suppress anger, for example, can often struggle with assertiveness.
    <br><br>
    Instead of eliminating distressing internal experiences, I think it can sometimes be more helpful to change your relationship
    with them. The way I typically approach this process is to use parts work and mindfulness to understand the different aspects
    of a client's internal experience. Understanding generally results in more gratitude and compassion for the internal experience,
    and subsequently the experience can be better tolerated, and isn't intensified. Imagery rescripting can be used to
    reconsolidate some of the stronger memories or associations.
    <br><br>
    Some really cool conclusions fall out of all of this. Issues with mental health develop for reasons which are all part of a
    well-functioning brain. We have evolved to have distressing emotions, and to resist them, and to have them overwhelm us
    when they are strong enough (because this means that action is urgent, so everything else needs to be drowned out).
    So, suffering from mental health issues isn't the sign of a pathology, it's a normal part of human experience. Also,
    it means that mental health isn't something which is genetically based and unchangeable. Even where a person does have a genetic
    propensity to experience more distressing emotions, it all comes down to your relationship with those emotions, rather than
    the emotions themselves.
    <br><br>
    My theoretical orientation is primarily Internal Family Systems Therapy, however this approach has significant overlap with
    some other forms of therapy you may be familiar with, such as Acceptance and Commitment Therapy, Compassion-focused Therapy,
    Ego State Therapy, Voice Dialogue, Focusing, Compassionate Inquiry, and probably many others which I have yet to encounter.
    The summary of this approach is to explicitly acknowledge and work with conflicting beliefs/emotions/impulses to gain deeper
    insight into the mind, and change your relationship with each part of the mind to be more accepting and compassionate,
    allowing for more distress tolerance, and allowing for the positive function of each emotion to emerge.
    </div>
    </div>
    </div>`
});