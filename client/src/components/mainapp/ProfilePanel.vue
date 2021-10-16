<template>
  <div class="home-form">
    
  </div>
</template>

<script>
export default {
  name: "ProfilePanel",
  components: {},
  data() {
    return {

    }
  },
  methods: {
    sendLogin() {
      let currentObj = this;
      this.axios.post(this.globalServeLink + 'loginFile', {
        name: this.logName,
        pass: this.logPass
      }).then(function (response) {
        currentObj.output = response.data;
      }).catch(function (error) {
        currentObj.output = error;
      });
    }
  },
  mounted() {

  }
};
</script>

<style lang="scss">

</style>
