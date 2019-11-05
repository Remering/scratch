import VueRouter from 'vue-router';
import routes from '../route';
import Vue from 'vue';


Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes,
});
