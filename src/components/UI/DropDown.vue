<template>
  <div class="dropDown">
    <select class="dropDown__select" v-model="sym">
      <option
        class="dropDown__option"
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
  watch: {
    sym(val) {
      this.$myStore.commit('setSymbol', val);
      this.$myStore.dispatch('loadStocks', 100);
    }
  },
  props: {
    options: Array
  }
}
</script>

<style lang="scss" scoped>
  .dropDown {

  }
</style>