<template>
  <div class="list-element">
    <ul class="list-element__ul" ref="elementUl">
      <li
        class="list-element__li list-element__li--empty"
        v-if="updates[0] === undefined"
      >
        Updates list empty...
      </li>

      <li class="list-element__li" v-else v-for="(el, i) in updates" :key="i">
        {{ el }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListElement',
  data() {
    return {
      updates: this.$myStore.state.updates,
    };
  },
  watch: {
    updates() {
      if (this.updates.length > 500) {
        this.updates.splice(0, 500);
      }
      const container = this.$refs.elementUl;
      container.scrollTo(0, container.scrollHeight);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-element {
  scrollbar-color: transparent transparent;
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    transition: background-color 1s;
  }
  :hover::-webkit-scrollbar-thumb {
    background-color: $dark-bold;
  }
  :hover {
    scrollbar-color: auto;
  }
  border: 1px solid #e8e8ec;
  padding: 1em;
  background: #fff;
  &__ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    height: 50vh;
  }
  &__li {
    &--empty {
      text-align: center;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
