<template>
  <div class="ws-home flex-box">
    <div class="left-side">
      <div class="ls-background"></div>
      <div class="ls-foreground">
        <router-link class="home-link" to="/">
          <img alt="White~sender logo" src="/assets/img/logo.svg" />
          <span>White~sender</span>
        </router-link>
        <h1 class="home-title">Welcome to our social network</h1>
        <p class="home-intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim
          veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea
          commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
          velitesse cillum dolore eu fugiat nulla pariatur. Excepteur
          sintoccaecat cupidatat non proident, sunt in culpa qui officiadeserunt
          mollit anim id est laborum.
        </p>
      </div>
      <span class="home-copyright"
        >Copyright 2021 &copy; Three nerdy dudes</span
      >
    </div>
    <div class="right-side">
      <div class="home-form-wrap">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/homepage/LoginForm.vue";

export default {
  title: "White~sender",
  name: "Home",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss"></style>
