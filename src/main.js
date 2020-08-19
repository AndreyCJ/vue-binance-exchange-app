import Vue from 'vue';
import App from '@/core/Core.vue';
import router from '@/routes/index.js';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
