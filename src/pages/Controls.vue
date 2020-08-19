<template>
  <div class="container">
    <div class="list-page">
      <DropDown :options="$store.state.options" />
      <div class="list-page__list-element">
        <ListElement />
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from '@/components/UI/DropDown.vue';
import ListElement from '@/components/UI/ListElement.vue';

export default {
  name: 'List',
  components: {
    DropDown,
    ListElement,
  },
};
</script>

<style lang="scss" scoped>
.list-page {
  max-width: 720px;
  margin: 2em auto 0 auto;
  &__list-element {
    margin-top: 1em;
  }
}
</style>
