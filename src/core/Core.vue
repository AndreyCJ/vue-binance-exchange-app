<template>
  <div id="app">
    <div class="error error--block flex-center" v-if="$store.state.errors.api">
      <span>{{ $store.state.errors.api }}</span>
    </div>
    <div v-else>
      <Header />
      <PageContainer />
    </div>
  </div>
</template>

<script>
import store from '@/core/store.js';

import Header from '@/components/UI/Header.vue';
import PageContainer from '@/components/UI/PageContainer.vue';

export default {
  name: 'Core',
  store,
  components: {
    Header,
    PageContainer,
  },
  created() {
    this.$store.dispatch('loadStocks', 100);
    this.$store.dispatch('subscribeToUpdates');
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary;
  background: $dark;
}

h1,
h2,
h3 {
  font-weight: $bold;
}

a {
  text-decoration: none;
  color: $primary;
}

.container {
  max-width: 1290px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 0.6em;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

::-webkit-scrollbar {
  width: 6px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background-color: $dark-bold;
  border-radius: 3px;
}

.error {
  padding: 5px;
  background: crimson;
  color: #f4f4f4;
  &--block {
    position: relative;
  }
  &--popup {
    position: absolute;
    max-width: 600px;
    width: 100%;
    height: auto;
    left: 0px;
    bottom: 10px;
  }
}

@media screen and (max-width: 895px) {
  .flex-center {
    flex-wrap: wrap;
  }
}
</style>
