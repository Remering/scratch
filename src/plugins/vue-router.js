import VueRouter from 'vue-router';
import routes from '../route';
import Vue from 'vue';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;