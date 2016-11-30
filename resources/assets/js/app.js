window.Vue = require('vue');
require('vue-resource');
require('../sass/app.scss');

Vue.component('login', require('./components/login/Main.vue'));
Vue.component('email', require('./components/login/Email.vue'));
Vue.component('password', require('./components/login/Password.vue'));
Vue.component('checkbox', require('./components/login/Checkbox.vue'));
Vue.component('submit', require('./components/login/Submit.vue'));
Vue.component('error', require('./components/login/Error.vue'));
Vue.component('form-input', require('./components/login/GeneralInput.vue'));


Vue.component('navigation', require('./components/navigation/Main.vue'));
Vue.component('nav-item', require('./components/navigation/NavItem.vue'));


new Vue({
    el: '#app',
})
