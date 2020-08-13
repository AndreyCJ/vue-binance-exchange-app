<template>
  <header class="stocks-header">
    <div class="container">
      <nav class="stocks-header__menu">
        <router-link
          to="/"
          class="stocks-header__item"
          exact
        >
          Таблица
        </router-link>
        <router-link
          to="/list"
          class="stocks-header__item"
          exact
        >
          Лист
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.stocks-header {
  background: $dark-light;
  &__menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__item {
    margin-right: 1em;
    border-bottom: 2px solid $dark-light;
    padding: 0.8em 0;
    // padding: 1em .8em;
  }
  &__item:last-child {
    margin-right: 0;
  }
  &__item:hover {
    border-bottom: 2px solid $light;
  }
}

.router-link-active {
  border-bottom: 1px solid $light;
}
</style>