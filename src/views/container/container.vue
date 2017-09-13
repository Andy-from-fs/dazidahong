<!--
Description
@authors Andy
@date    2017-09-13 10:54:19
@version 1.0.0
-->
<template>
  <div>
    <welcome></welcome>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import footer from './components/footer.vue';
  import welcome from './components/welcome.vue';
  import header from './components/header.vue';
  export default {
    name: 'container',
    components:{
      'my-header':header,
      'my-footer':footer,
      'welcome':welcome,
    },
  }
</script>

<style lang="scss" scoped>
  
</style>