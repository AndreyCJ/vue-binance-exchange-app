<template>
  <div class="page-content">
    <div class="container">
      <div class="error error--popup" v-if="$store.state.errors.updateData">
        <span>{{ $store.state.errors.updateData }}</span>
      </div>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContainer',
};
</script>
