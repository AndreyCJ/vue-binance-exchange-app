async function loadStocks({ commit, dispatch, state }, limit = 500) {
  try {
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
  } catch (e) {
    commit('setError', {
      msg: 'При загрузке данных с сервера произошла ошибка, обновите страницу',
      target: 'api',
    });
    console.log(e);
  }
}

function subscribeToUpdates({ commit, dispatch, state }) {
  let data = [];
  let currentEvent = null;
  let prevEvent = null;
  let index = 0;
  state.socket = new WebSocket(
    `wss://stream.binance.com:9443/ws/${state.symbol.toLowerCase()}@depth`
  );

  const initWsConnection = (socket) => {
    socket.onopen = (event) => {
      console.log('Successufly conected to ws', event);
    };
    socket.onmessage = (event) => {
      index++;
      data.push(JSON.parse(event.data));
      currentEvent = data[index - 1];
      prevEvent = data[index - 2];

      if (index === 1) {
        if (
          data.U <= state.lastUpdateID + 1 &&
          data.u >= state.lastUpdateID + 1
        ) {
          commit('setLastUpdateID', data.u);
          dispatch('processUpdates', currentEvent);
        }
      } else if (currentEvent.U === prevEvent.u + 1) {
        commit('setLastUpdateID', prevEvent.u);
        dispatch('processUpdates', currentEvent);
      }
    };
    socket.onerror = (event) => {
      commit('setError', {
        msg: 'При обновлении данных произошла ошибка, обновите страницу',
        target: 'updateData',
      });
      console.log('Websocket error: ', event);
    };
  };
  initWsConnection(state.socket);
}

export default { loadStocks, subscribeToUpdates };
