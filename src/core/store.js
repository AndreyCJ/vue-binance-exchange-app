import Vue from 'vue';
import Vuex from 'vuex';
import StocksApiPlugin from '@/core/StocksApiPlugin.js';

const socket = new WebSocket('wss://stream.binance.com:9443/ws/bnbbtc@depth');
const apiPlugin = StocksApiPlugin(socket);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastUpdateID: null,
    loading: false,
    stocks: {},
    bids: [],
    updatedBids: [],
    updatedAsks: [],
    asks: []
  },
  actions: {
    async loadStocks({ commit }, limit = 500) {
      commit('loading', { isLoading: true });
      const url = `https://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();
      
      const bids = data.bids;
      const asks = data.asks;

      commit('loading', { isLoading: false });

      commit('setLastUpdateID', data.lastUpdateId);
      commit('setBids', bids);
      commit('setAsks', asks);
      commit('setStocks', { ...data });
    }
  },
  mutations: {
    setStocks(state, data) {
      state.stocks = { data };
    },
    setBids(state, bids) {
      state.bids = bids;
    },
    setUpdatedBids(state, bids) {
      state.updatedBids = bids;
    },
    setAsks(state, asks) {
      state.asks = asks;
    },
    setUpdatedAsks(state, asks) {
      state.updatedAsks = asks;
    },
    setLastUpdateID(state, id) {
      state.lastUpdateID = id;
    },
    loading(state, isLoading) {
      state.loading = { isLoading };
    },
  },
  getters: {
    getStocks(state) {
      return state.stocks;
    }
  },
  plugins: [apiPlugin]
});