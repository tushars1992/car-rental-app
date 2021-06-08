<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./views/Home.vue";

export default Vue.extend({
  name: "App",
  components: {
    Home,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  font-size: 14px;
}
body {
  margin: 0;
}
#app {
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
