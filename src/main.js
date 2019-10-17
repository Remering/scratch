import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueAxios from './plugins/vue-axios'
import store from './store';

import "roboto-fontface/css/roboto/roboto-fontface.css"

Vue.config.productionTip = false;

new Vue({
  vuetify,
  VueAxios,
  store,
  render: h => h(App)
}).$mount("#app");

