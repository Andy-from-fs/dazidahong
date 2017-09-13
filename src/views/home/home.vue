<!--
Description
@authors Andy
@date    2017-09-13 09:56:26
@version 1.0.0
-->
<template>
  <div>
    <swiper></swiper>
    <div class="btn-group">
      <nav>公司简介</nav>
      <nav>产品展示</nav>
      <nav>展会形象</nav>
    </div>
    <div class="series-group">
      <nav class="_left" ref="huaxin"><img src="../../assets/pics/huaxia.png"></nav>
      <nav class="_right" ref="huayun"><img src="../../assets/pics/huayun.png"></nav>
      <nav class="_left" ref="oufeng"><img src="../../assets/pics/oufeng.png"></nav>
      <nav class="_right" ref="yuanmu"><img src="../../assets/pics/yuanmu.png"></nav>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import swiper from './components/swiper.vue';
  export default {
    name: 'home',
    components: {
      'swiper': swiper
    }
  }
</script>

<style lang="scss" scoped>
  .btn-group {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    padding: .5em 0 0 0;
    nav {
      line-height: 2em;
      width: 30%;
      text-align: center;
      background: url('../../assets/pics/border.png'), no-repeat;
      background-size: 100% 100%;
      font-size: .8em;
    }
  }

  .series-group {
    width: 100%;
    padding: .5em;
    nav {
      width: 49%;
      margin: 0 0 .5em 0;
    }
  }
</style>