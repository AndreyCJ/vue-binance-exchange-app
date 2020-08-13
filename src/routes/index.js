import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Stocks = () => import(/* webpackChunkName: "Stocks" */ '../pages/Stocks.vue');
const List = () => import(/* webpackChunkName: "list" */ '../pages/List.vue');

const routes = [
  {
    path: '/',
    name: 'Stocks',
    component: Stocks
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = new VueRouter({
  routes
});

export default router;