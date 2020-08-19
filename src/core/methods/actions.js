import API from '@/core/methods/API.js';

const { loadStocks, subscribeToUpdates } = API;

export default {
  loadStocks,
  subscribeToUpdates,
  processUpdates({ commit }, data) {
    data.b.forEach((update) => {
      commit('manageStocks', ['bids', update]);
    });
    data.a.forEach((update) => {
      commit('manageStocks', ['asks', update]);
    });
  },
};
