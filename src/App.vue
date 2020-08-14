<template>
  <div id="app">
    <Header />
    <PageContainer />
  </div>
</template>

<script>
import Header from './components/UI/Header.vue'
import PageContainer from './components/UI/PageContainer.vue'

export default {
  name: 'App',
  components: {
    Header,
    PageContainer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

*, *::before,
*::after {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
  overflow-y: overlay;
}

body {
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary;
  background: $dark;
}

h1,
h2,
h3 {
  font-weight: $bold;
}

a {
  text-decoration: none;
  color: $primary;
  // color: $primary-light;
}

.container {
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  padding: 0 .6em;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 895px) {
  .flex-center{
    flex-wrap: wrap;
  }
}

::-webkit-scrollbar {
  width: 4px;
  position: absolute;
}
::-webkit-scrollbar-thumb {
  background-color: $light;
  border-radius: 2px;
}
</style>
