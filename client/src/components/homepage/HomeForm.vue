<template>
  <div class="home-form">
    <div class="hf-head">
      <div class="hf-toggle flex-box">
        <div class="slide-card" id="slideAnim"></div>
        <button @mouseover="hoveredId(0)" @mouseleave="hoveredId(this.selectId)" @click="selectedId(0)" :class="{'hf-card-active': this.selectId===0}" class="toggle-item">
          <span>Sign in</span>
        </button>
        <button @mouseover="hoveredId(1)" @mouseleave="hoveredId(this.selectId)" @click="selectedId(1)" :class="{'hf-card-active': this.selectId===1}" class="toggle-item">
          <span>Sign up</span>
        </button>
      </div>
    </div>
    <div class="hf-body">
      <div class="hf-card" :class="{'hf-card-active': this.selectId===0}">
        <div class="input-box" id="logUser">
          <input v-model="this.logName" type="text" name="user" placeholder="Username or email">
        </div>
        <div class="input-box" id="logPass">
          <input v-model="this.logPass" type="text" name="user" placeholder="Password">
        </div>
        <button class="btn-confirm" @click="sendLogin">Sign in</button>
      </div>
      <div class="hf-card" :class="{'hf-card-active': this.selectId===1}">
        <div class="input-box">
          <input v-model="this.regName" type="text" name="fullname" placeholder="Full name">
        </div>
        <div class="input-box" id="regMail">
          <input @blur="validateInput(this.regName, /^([\w-\.]+@([\w-]+\.)+[\w-]{2,10})?$/i, 'regMail')" v-model="this.regMail" type="email" name="email" placeholder="Type Username or email">
        </div>
        <div class="input-box" id="regPass">
          <input @blur="validateInput(this.regPass, /[\d]{1}/g, 'regPass')" v-model="this.regPass" type="password" name="user" placeholder="Password (at least one digit)">
        </div>
        <button @click="sendRegistration" class="btn-confirm">Sign up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeForm",
  components: {},
  inject:[""],
  data() {
    return {
      hoverId: 0,
      selectId: 0,
      logName: "",
      logPass: "",
      regName: "",
      regPass: "",
      regMail: "",
      validPass: false
    }
  },
  methods: {
    hoveredId(id){
      this.hoverId = id;
      document.getElementById("slideAnim").style.transform = "translateX("+ (id*100) +"%)";
    },
    selectedId(id){
      this.selectId = id;
    },
    validateInput(value, regData, elemId){
      if (value !== "") {
        let regPattern = new RegExp(regData);
        if (regPattern.test(value)) {
          document.getElementById(elemId).classList.add("input-ok");
        }
        else{document.getElementById(elemId).classList.remove("input-ok");}
      }
      else{document.getElementById(elemId).classList.remove("input-ok");}
    }
  },
};
</script>

<style lang="scss">

</style>
