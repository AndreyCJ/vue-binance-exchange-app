import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Stocks = () => import(/* webpackChunkName: "Stocks" */ '../pages/Stocks.vue');
const Controls = () => import(/* webpackChunkName: "Controls" */ '../pages/Controls.vue');

const routes = [
  {
    path: '/',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/controls',
    name: 'Controls',
    component: Controls
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});

export default router;