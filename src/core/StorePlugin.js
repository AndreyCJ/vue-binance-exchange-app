import Vue from 'vue';
import Vuex from 'vuex';
import store from './store.js';

Vue.use(Vuex);

export default {
  store,
  install (Vue) {
    Vue.prototype.$myStore = store;
  }
};
