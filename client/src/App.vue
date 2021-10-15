<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/app">About</router-link>
  </div>-->
  <router-view />
</template>

<script>
export default {
  watch: {
    $route (to) {document.title = to.meta.title || "White~sender"}
  },
  components: {}
};
</script>
<style lang="scss">

</style>
