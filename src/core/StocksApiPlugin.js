export default function StocksApiPlugin(socket) {
  return store => {
    const subscribeToUpdates = (socket) => {
      socket.onopen = event => {
        console.log(event)
        console.log('Successufly conected to ws');
      }
      socket.onmessage = event => {
        const data = JSON.parse(event.data);
        if(data.u > store.lastUpdateID) {
          store.commit('setUpdatedBids', data.b);
          store.commit('setUpdatedAsks', data.a);
        }
        console.log(data);
        
      }
    };

    subscribeToUpdates(socket);
  }
}
