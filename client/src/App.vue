<template>
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
  }
};
</script>
<style lang="scss">

</style>
