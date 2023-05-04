<template>
  <div class="main-app">
    <header>
      <div class="main-container">
        <router-link class="app-link" to="/app">
          <img alt="White~sender logo" src="/assets/img/logo.svg">
          <span>White~sender</span>
        </router-link>
      </div>
    </header>
    <div class="app-wrap">
      <div class="main-container flex-box">
        <div class="profile-panel-wrap">
          <ProfilePanel />
        </div>
        <div class="wall-wrap">

        </div>
        <div class="user-list-wrap">
          <ListPanel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePanel from "@/components/mainapp/ProfilePanel.vue";
import ListPanel from "@/components/mainapp/ListPanel.vue";

export default {
  title: "App | White~sender",
  name: "MainApp",
  components: {
    ProfilePanel,
    ListPanel
  },
};
</script>

<style lang="scss">

</style>
