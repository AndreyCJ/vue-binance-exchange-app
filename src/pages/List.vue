<template>
  <div class="container">
    <DropDown :options="options" />
  </div>
</template>

<script>
import DropDown from '@/components/UI/DropDown.vue';
export default {
  name: 'List',
  data() {
    return {
      options: ['BTCUSDT', 'BNBBTC', 'ETHBTC']
    }
  },
  components: {
    DropDown
  }
}
</script>