<!--
Description
@authors Andy
@date    2017-09-13 09:54:47
@version 1.0.0
-->
<template>
  <div class="header container">
    <span class=" return icon-back-arrow" @click='btnBack'></span>
    <p class="title">{{title}}</p>
    <span class=" menu icon-menu"></span>
  </div>
</template>

<script>
  export default {
    name: 'header',
    computed: {
      title() {
        return this.$route.meta.title;
      }
    },
    methods: {
      btnBack() {
        if (
          this.$route.name === "business" ||
          this.$route.name === "recruit" ||
          this.$route.name === "keep_in_touch" ||
          this.$route.name === "video"
        ) {
          this.$router.push({
            name: 'home'
          });
        } else if (this.$route.name === "home") {} else {
          this.$router.go(-1);
        }
      }
    }
  }
</script>

<style lang="scss">
  .header {
    height: 2em;
    text-align: center;
    line-height: 2em;
    background-color: #333333;
    position: fixed;
    top: 0;
    z-index: 1000;
    color: #ffffff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    z-index: 900;
  }

  .icon {
    width: 1em;
  }

  .title{
    width: 70%;
  }

  .return,
  .menu {
    padding: 0 .5em;
  }
</style>