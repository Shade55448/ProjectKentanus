<template>
  <div class="ws-home flex-box">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <div class="left-side">
      <div class="ls-background"></div>
      <div class="ls-foreground">
        <router-link class="home-link" to="/">
          <img alt="White~sender logo" src="assets/img/logo.svg">
          <span>White~sender</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "White~sender",
  name: "Home",
  components: {},
};
</script>

<style lang="scss">

</style>
