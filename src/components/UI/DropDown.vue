<template>
  <div class="drop-down">
    <select class="drop-down__select" v-model="$store.state.symbol" @change="handleClick($store.state.symbol)">
      <option class="drop-down__option" v-for="(option, i) in $store.state.options" :key="i">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  methods: {
    handleClick(val) {
      this.$store.commit('setSymbol', val);
      this.$store.dispatch('loadStocks', 100);
      this.$store.commit('closeSocket');
      this.$store.commit('resetUpdates');
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-down {
  &__select {
    padding: 0.5em;
    border: 1px solid #e8e8ec;
    color: $light;
    cursor: pointer;
  }
  &__option {
    color: $light;
  }
}
</style>
