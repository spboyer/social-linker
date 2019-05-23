/* eslint-disable no-console */
import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import router from './router';

import VueClipboard from 'vue-clipboard2';
import Toasted from 'vue-toasted';
import Vuelidate from 'vuelidate';

Vue.use(Vuetify, {
  theme: {
    primary: '#3399ff',
    secondary: '#00e389',
    accent: '#f26c22',
    error: '#e5001e',
    info: '#ffd925',
    success: '#00e389',
    warning: '#FFC107',
  },
});

Vue.use(VueClipboard);
Vue.use(Toasted);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
