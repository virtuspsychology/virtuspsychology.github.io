const Psychometrics = Vue.component('psychometrics', {
    template: `<div class="page-outer-frame">
    <div class="lander-filler"></div>
    <div class="page-inner-frame">
    <div class="hero-image" style="background-image: url('./assets/puzzle.jpg')">
    <div class="hero-text">
    <h1 class="title">Psychometrics</h1>
    </div>
    </div>
    <div class="page-content">
    <span>Please note: to preserve confidentiality, no data is recorded and autocomplete is explicitly disabled.
    If you would like to keep a record of the data, please either email, print, or manually record the data.<br><br>
    <a href="psychometrics/DASS.html">Depression, Anxiety, and Stress Scale</a><br>
    <a href="psychometrics/ORS.html">Outcome Rating Scale</a><br>
    <a href="psychometrics/Preferences.html">Therapy Preferences</a><br>
    </span>
    </div>
    </div>
    </div>
    </div>`
});
