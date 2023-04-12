const Booking = Vue.component('booking', {
    data() {
        return {
            location: null
        }
    },
    methods: {
        setLocation(location){
            this.location = location;
        }
    },
    mounted(){
        this.location = null;
    },
    template: `<div class="page-outer-frame">
    <div class="lander-filler"></div>
    <div class="page-content">
    <br><br>
    Please note that payment is deducted upon booking an appointment. If you are eligible for a Medicare rebate, this can be processed
    after the appointment has been attended, as long as a valid referral from a GP has been provided. 
    <br><br>
    Please also note that I do not provide assessment services, and am not taking on new child clients (clients under the age of 18).
    <br><br>
    </div>
    <iframe v-if="location == 'OConnor'" src="https://www.halaxy.com/book/widget/psychologist/mr-david-odonohue/724811/626281" class="booking-system"></iframe>
    <iframe v-else-if="location == 'Deakin'" src="https://www.halaxy.com/book/widget/psychologist/mr-david-odonohue/724811/837311" class="booking-system"></iframe>
    <div v-else class="page-content">
    <p>Which location would you like to make a booking for?</p><br><br>
    <div @click="setLocation('OConnor')" class="button">O'Connor</div>
    <div @click="setLocation('Deakin')" class="button">Deakin</div>
    </div>
    </div>
    </div>`
});
