/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedditSquare, faLinkedin, faTwitterSquare, faFacebookSquare, faStackOverflow, faHackerNewsSquare, faMedium, faYoutubeSquare, faGithub, faDev } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted';
import router from './router'
import Vuelidate from 'vuelidate'

library.add(faRedditSquare);
library.add(faLinkedin);
library.add(faTwitterSquare);
library.add(faFacebookSquare);
library.add(faStackOverflow);
library.add(faHackerNewsSquare);
library.add(faMedium);
library.add(faYoutubeSquare);
library.add(faGithub);
library.add(faCopy);
library.add(faDev);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueClipboard);
Vue.use(Toasted);
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

