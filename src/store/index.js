import Vuex from 'vuex';
import Vue from 'vue';
import login from '@/store/modules/login';
import register from '@/store/modules/register';
import snackbar from '@/store/modules/snackbar';
import drawer from '@/store/modules/drawer';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    login,
    register,
    snackbar,
    drawer,
  },
  strict: debug,
})