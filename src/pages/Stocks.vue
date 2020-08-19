<template>
  <div class="container flex-center">
    <Table :type="bids" v-if="!$store.state.loading" />
    <Table :type="asks" v-if="!$store.state.loading" />
    <Loader v-else />
  </div>
</template>

<script>
import Table from '@/components/UI/Table.vue';
import Loader from '@/components/UI/Loader.vue';

export default {
  name: 'Stocks',
  components: {
    Table,
    Loader,
  },
  computed: {
    bids() {
      return this.$store.state.bids;
    },
    asks() {
      return this.$store.state.asks;
    },
  },
};
</script>

<style lang="scss" scoped></style>
