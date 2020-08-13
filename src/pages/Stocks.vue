<template>
  <div class="container flex-center">
    <Table :type="bids"/>
    <Table :type="asks"/>
  </div>
</template>

<script>
import Table from '@/components/UI/Table.vue';

export default {
  name: 'Stocks',
  components: {
    Table
  },
  computed: {
    bids() {
      let bids = this.$myStore.state.bids;
      // let updatedBids = this.$myStore.state.updatedBids;
      // if(updatedBids.length) {
        // const bidsCopy = [...bids];
        // bidsCopy.forEach(pair => {
        //   console.log(pair)
        // })

        // const bidsTest = new Set([...bidsCopy, ...updatedBids]);
        // console.log(bidsCopy)
      // }
      return bids;
    },
    asks() {
      const asks = this.$myStore.state.asks;
      return asks;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>