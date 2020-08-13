import Vue from 'vue';
import App from '@/core/Core.vue';
import StorePlugin from '@/core/StorePlugin.js';
import router from '@/routes/index.js';
import Vuex from 'vuex'

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(StorePlugin);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
