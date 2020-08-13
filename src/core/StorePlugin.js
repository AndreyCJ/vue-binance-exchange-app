import Vue from 'vue';
import Vuex from 'vuex';
import store from './store.js';

Vue.use(Vuex);

export default {
  store,
  install (Vue) {
    Vue.prototype.$myStore = store;
  }
};
 

// const subscribePlugin = store => {
//   // called when the store is initialized
//   store.subscribe((mutation, state) => {
//   // called after every mutation.
//   // The mutation comes in the format of `{ type, payload }`.
//   });
// };

// export default function createWebSocketPlugin (socket) {
//   return store => {
//     socket.on('data', data => {
//       store.commit('receiveData', data)
//     })
//     store.subscribe(mutation => {
//       if (mutation.type === 'UPDATE_DATA') {
//         socket.emit('update', mutation.payload)
//       }
//     })
//   }
// }
 