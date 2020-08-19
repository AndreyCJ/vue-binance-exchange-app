export default {
  manageStocks(state, update) {
    const type = update[0];
    const [price, amount] = update[1];

    let filteredStocks = [...state.stocks.data[type]];

    for (let i = 0; i < filteredStocks.length; i++) {
      if (price === filteredStocks[i][0]) {
        if (amount === '0.00000000') {
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
      if (
        (price > filteredStocks[i][0] && type === 'bids') ||
        (price < filteredStocks[i][0] && type === 'asks')
      ) {
        if (amount !== '0.00000000') {
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
    } else if (type === 'bids') {
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
    const lastUpdate = state.updates[state.updates.length - 1];
    state.updates.length = 0;
    state.updates[0] = lastUpdate;
  },
  setError(state, { msg, target }) {
    state.errors[target] = msg;
  },
};
