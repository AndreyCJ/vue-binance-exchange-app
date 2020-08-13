<template>
  <App />
</template>

<script>
import App from '@/App.vue';

export default {
  name: 'Core',
  components: {
    App
  },
  created() {
    this.$myStore.dispatch('loadStocks', 100);
  },
  computed: {
    loading() {
      console.log(this.$myStore.state.loading)
      return this.$myStore.state.loading;
    },
  }
}
</script>