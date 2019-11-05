import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueAxios from './plugins/vue-axios';
import VueCookies from 'vue-cookies/vue-cookies';
import router from './plugins/vue-router';
import store from './store';
import '@/plugins/vue-video-player';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

Vue.config.productionTip = false;


new Vue({
  vuetify,
  VueAxios,
  VueCookies,
  store,
  router,
  render: h => h(App)
}).$mount("#app");

