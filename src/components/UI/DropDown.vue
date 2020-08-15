<template>
  <div class="drop-down">
    <select
      class="drop-down__select"
      v-model="sym"
      @change="handleClick(sym)"
    >
      <option
        class="drop-down__option"
        v-for="(option, i) in options"
        :key="i"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  data() {
    return {
      sym: this.$myStore.state.symbol
    }
  },
  methods: {
    handleClick(val) {
      this.$myStore.commit('setSymbol', val);
      this.$myStore.commit('closeSocket');
      this.$myStore.commit('clearUpdates');
      this.$myStore.dispatch('loadStocks', 100);
    }
  },
  props: {
    options: Array
  }
}
</script>

<style lang="scss" scoped>
.drop-down {
  &__select {
    padding: 0.5em;
    border: 1px solid #E8E8EC;
    color: $light;
    cursor: pointer;
  }
  &__option {
    color: $light;
  }
}
</style>