import Vuex from 'vuex';
import Vue from 'vue';
import login from '@/store/modules/login';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    login
  },
  strict: debug

})