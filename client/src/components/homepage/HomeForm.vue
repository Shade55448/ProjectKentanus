<template>
  <div class="home-form">
    <div class="hf-head">
      <div class="hf-toggle flex-box">
        <div class="slide-card" id="slideAnim"></div>
        <button @mouseover="hoveredId(0)" @mouseleave="hoveredId(this.selectId)" class="toggle-item hf-card-active">
          <span>Sign in</span>
        </button>
        <button @mouseover="hoveredId(1)" @mouseleave="hoveredId(this.selectId)" class="toggle-item">
          <span>Sign up</span>
        </button>
      </div>
    </div>
    <div class="hf-body">
      <div class="hf-card hf-card-active">
        <div class="input-box">
          <input type="text" name="user" placeholder="Username or email">
        </div>
        <div class="input-box">
          <input type="password" name="user" placeholder="Password">
        </div>
        <button class="btn-confirm">Sign in</button>
      </div>
      <div class="hf-card">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeForm",
  components: {},
  data() {
    return {
      hoverId: 0,
      selectId: 0
    }
  },
  methods: {
    hoveredId(id){
      this.hoverId = id;
      document.getElementById("slideAnim").style.transform = "translateX("+ (id*100) +"%)";
    },
    selectedId(id){
      this.hoverId = id;
    }
  }
};
</script>

<style lang="scss">

</style>
