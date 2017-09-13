<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import url('./assets/css/reset.css');
  body{
    margin: 2em 0 3.5em 0;
  }
</style>