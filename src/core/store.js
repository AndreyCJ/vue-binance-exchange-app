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
    updatedBids: [],
    updatedAsks: [],
    asks: [],
    symbol: 'BNBBTC',
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
      // state.socket.close();
      dispatch('closeSocket');
      
      let data = [];
      let currentEvent = null;
      let prevEvent = null;
      let index = 0;

      const initWsConnection = () => {
        const socket = dispatch('socket');
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
            // else {
            //   console.log('NOPE')
            // }
          } else if (currentEvent.U === (prevEvent.u + 1)) {
            commit('setLastUpdateID', prevEvent.u);
            dispatch('processUpdates', currentEvent);
          } 
          // else {
          //   console.log('Out of sync')
          // }
        }
      };
      initWsConnection();
    },
    processUpdates({ commit }, data) {
      data.b.forEach(update => {
        commit('manageStocks', ['bids', update]);
      });
      data.a.forEach(update => {
        commit('manageStocks', ['asks', update]);
      });
    },
    socket({state}) {
      const socket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${state.symbol.toLowerCase()}@depth`
      );
      return socket;
    },
    closeSocket({dispatch}) {
      const socket = dispatch('socket');
      socket.close();
    }
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
            break;
          } else {
            filteredStocks[i][0] = price;
            filteredStocks[i][1] = amount;
            break;
          }
        } 
        if ((price > filteredStocks[i][0] && type === 'bids') ||
            (price < filteredStocks[i][0] && type === 'asks')){
          if (amount !== "0.00000000") {
            filteredStocks[i][0] = price;
            filteredStocks[i][1] = amount;
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
    setUpdatedBids(state, bids) {
      state.updatedBids = bids;
    },
    setAsks(state, asks) {
      state.asks = asks;
    },
    setUpdates(state, data) {
      state.updates = data;
    },
    setUpdatedAsks(state, asks) {
      state.updatedAsks = asks;
    },
    setLastUpdateID(state, id) {
      state.lastUpdateID = id;
    },
    loading(state, isLoading) {
      state.loading = isLoading;
    },
    setSymbol(state, symbol) {
      state.symbol = symbol;
    }
  },
  getters: {
    getStocks(state) {
      return state.stocks;
    }
  },
});
