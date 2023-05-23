const Booking = Vue.component('booking', {
    beforeRouteLeave(to, from, next) {
        clearInterval(this.countdown);
        next();
    },
        methods: {
            redirectToNewWebsite() {
                clearInterval(this.countdown);
                window.location.href = "https://www.pendulumpsychology.com.au/booking.html";
            },
            cancelTimeout() {
                clearInterval(this.countdown);
            },
            startCountdown() {
                this.countdown = setInterval(() => {
                    this.counter--;
                    if (this.counter === 0) {
                        this.redirectToNewWebsite();
                    }
                }, 1000);
            }
        },
        data() {
            return {
                counter: 10,
                countdown: null
            }
        },
        computed: {
            // backgroundStyle(){
            //     var index = Math.floor(Math.random() * this.images.length);
            //     return "background-image: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(" + this.images[index] + ");";
            //     //return "background-image: url(" + this.images[index] + ");";
            },
        mounted() {
            this.startCountdown();
        },
        template: `
        <div class="page-outer-frame" style="margin-top: 60px; max-width: 700px; margin-bottom: 30px;">
        <p>This website will automatically redirect you to my new Pendulum Psychology website in <span>{{ counter }}</span> seconds.</p>
        <div class="button" @click="redirectToNewWebsite">Take me there now</div>
        <div class="button" @click="cancelTimeout">Cancel the redirect</div>
        <p>Hi!
    <br><br>
    I am excited to announce that Virtus Psychology is now Pendulum Psychology. The practice's new name reflects an evolution in my therapeutic approach, emphasising the importance of balance, harmony, and insight into the apparently opposite and contradictory, but ultimately interdependent, psychological forces within us. 
    <br><br>
    My initial focus was on identifying behaviors and qualities that promote well-being. However, through my work with clients, I discovered that solely focusing on specific virtues or behaviors can sometimes lead to unintended consequences. This realisation inspired me to adopt a new perspective that embraces the full spectrum of our thoughts, feelings, and experiences.
    <br><br>
    Pendulum Psychology symbolises the dynamic equilibrium that can be achieved when we understand, and either integrate or accept the seemingly opposing forces within ourselves. For a long time now, my approach has revolved around understanding the origins and functions of our thoughts and emotions and helping clients find a balanced, harmonious middle ground.
    <br><br>
    If you have any questions or concerns, please feel free to reach out to me through my new website or contact me directly. I look forward to continuing to support your journey towards wellbeing and self-insight under a name which more closely resonates with my therapeutic approach.</p>
        </div>
        `
    });
    
