<template>
  <header class="stocks-header">
    <div class="container">
      <nav class="stocks-header__menu">
        <router-link
          to="/"
          class="stocks-header__item"
          exact
        >
          Stocks
        </router-link>
        <router-link
          to="/controls"
          class="stocks-header__item"
          exact
        >
          Controls
        </router-link>
      </nav>
      <div class="stocks-header__currency">
        <span>{{ this.$myStore.state.symbol }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.stocks-header {
  background: $dark-light;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__item {
    margin-right: 1em;
    border-bottom: 2px solid $dark-light;
    padding: 0.6em 0;
    font-weight: 500;
    // padding: 1em .8em;
  }
  &__item:last-child {
    margin-right: 0;
  }
  &__item:hover {
    border-bottom: 2px solid $light;
  }
  &__currency {
    font-size: 0.9rem;
    cursor: default;
  }
}

.router-link-active {
  border-bottom: 2px solid $light;
}
</style>