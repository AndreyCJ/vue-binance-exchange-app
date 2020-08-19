import Vue from 'vue';
import Vuex from 'vuex';
import actions from '@/core/methods/actions.js';
import mutations from '@/core/methods/mutations.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastUpdateID: null,
    loading: false,
    stocks: {},
    bids: [],
    updates: [],
    asks: [],
    symbol: 'BNBBTC',
    socket: null,
    options: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
    errors: {
      api: '',
      updateData: '',
    },
  },
  actions: actions,
  mutations: mutations,
  getters: {
    getStocks(state) {
      return state.stocks;
    },
  },
});
