const Index = Vue.component('index', {
    methods: {
        scrollToContent(){
            var yValue = window.innerHeight - 48;
            window.scrollTo({top:yValue, behavior: 'smooth'});
        }
    },
    template: `<div class="page-frame">
    <div class="lander">
    <span></span>
    <span>
    <h2 class="lander-text">In-person or telehealth therapy in Canberra</h2>
    <p class="lander-text">Contact David via email at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or via SMS at
    <a href="sms:0401609112">0401 609 112</a> to request an appointment or make an inquiry.</p>
    </span>
    <div @click="scrollToContent" class="bounce">
    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60"><path class="arrow" d="M7.4 8.6L12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4z"/></svg>
    </div>
    </div>
    <div class="page-content" id="content">
    David O'Donohue is a registered psychologist with a Master's degree in clinical psychology. 
    His primary focus will be to understand your individual and unique circumstances, and work with
    you to find an evidence-based therapeutic intervention that works for you.
    <br><br>
    David's interests involve Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT),
    mindfulness, Dialectical Behaviour Therapy (DBT), positive psychology, and the philosophical roots of these treatment frameworks.
    <br><br>
    David is currently accepting mental health care plan referred and self-referred clients experiencing symptoms related to anxiety and depression.
    <br><br>
    To request an appointment or make an inquiry, please contact David via email at <a href="mailto:virtuspsychology@gmail.com">virtuspsychology@gmail.com</a> or
    via SMS at <a href="sms:0401609112">0401 609 112</a>.
    </div>
    </div>`
});
