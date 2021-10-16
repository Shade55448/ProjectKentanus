<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/app">About</router-link>
  </div>-->
  <router-view />
</template>

<script>
export default {
  data() {
    return {
    }
  },
  watch: {
    $route (to) {document.title = to.meta.title || "White~sender"}
  },
  components: {},
  provide:{
    globalServeLink: "http://localhost:8081/"
  }
};
</script>
<style lang="scss">

</style>
