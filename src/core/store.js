import Vue from 'vue';
import Vuex from 'vuex';

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
    socket: null
  },
  actions: {
    async loadStocks({ commit, dispatch, state }, limit = 500) {
      commit('loading', true);

      const url = `https://www.binance.com/api/v1/depth?symbol=${state.symbol}&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();

      const bids = data.bids;
      const asks = data.asks;

      commit('loading', false);

      commit('setLastUpdateID', data.lastUpdateId);
      dispatch('subscribeToUpdates');
      commit('setBids', bids);
      commit('setAsks', asks);
      commit('setStocks', { ...data });
    },
    subscribeToUpdates({ commit, dispatch, state }) {
      let data = [];
      let currentEvent = null;
      let prevEvent = null;
      let index = 0;

      const initWsConnection = (socket) => {
        socket.onopen = event => { 
          console.log('Successufly conected to ws', event);
        }
        socket.onmessage = event => {
          index++;
          data.push(JSON.parse(event.data));
          currentEvent = data[index - 1];
          prevEvent = data[index - 2];

          if (index === 1) {
            if (
              data.U <= (state.lastUpdateID + 1)
              && data.u >= (state.lastUpdateID + 1)
            ) {
              commit('setLastUpdateID', data.u);
              dispatch('processUpdates', currentEvent);
            }
          } else if (currentEvent.U === (prevEvent.u + 1)) {
            commit('setLastUpdateID', prevEvent.u);
            dispatch('processUpdates', currentEvent);
          } 
        }
      };
      state.socket = new WebSocket(`wss://stream.binance.com:9443/ws/${state.symbol.toLowerCase()}@depth`);
      initWsConnection(state.socket);
    },
    processUpdates({ commit }, data) {
      data.b.forEach(update => {
        commit('manageStocks', ['bids', update]);
      });
      data.a.forEach(update => {
        commit('manageStocks', ['asks', update]);
      });
    },
  },
  mutations: {
    manageStocks(state, update) {
      const type = update[0];
      const [price, amount] = update[1];

      let filteredStocks = [...state.stocks.data[type]];

      for (let i = 0; i < filteredStocks.length; i++) {
        if (price === filteredStocks[i][0]) {
          if (amount === "0.00000000") {
            filteredStocks[i].slice(0, 0);
            state.updates.push(`Removed: [${price}, ${amount}]`);
            break;
          } else {
            filteredStocks[i][0] = price;
            filteredStocks[i][1] = amount;
            state.updates.push(`Updated: [${price}, ${amount}]`);
            break;
          }
        } 
        if ((price > filteredStocks[i][0] && type === 'bids') ||
            (price < filteredStocks[i][0] && type === 'asks')){
          if (amount !== "0.00000000") {
            filteredStocks[i][0] = price;
            filteredStocks[i][1] = amount;
            state.updates.push(`New price: ${price} -> ${amount}`);
            break;
          } else {
            break;
          }
        }
      }

      if (type === 'asks') {
        state.asks = filteredStocks;
      } else if (type === 'bids'){
        state.bids = filteredStocks;
      }
    },
    setStocks(state, data) {
      state.stocks = { data };
    },
    setBids(state, bids) {
      state.bids = bids;
    },
    setAsks(state, asks) {
      state.asks = asks;
    },
    setUpdates(state, data) {
      state.updates = data;
    },
    setLastUpdateID(state, id) {
      state.lastUpdateID = id;
    },
    loading(state, isLoading) {
      state.loading = isLoading;
    },
    setSymbol(state, symbol) {
      state.symbol = symbol;
    },
    closeSocket(state) {
      if (1 === state.socket.readyState) {
        state.socket.close();
        state.socket = null;
      }
    },
    clearUpdates(state) {
      state.updates.splice(0, state.updates.length);
    }
  },
  getters: {
    getStocks(state) {
      return state.stocks;
    }
  },
});
