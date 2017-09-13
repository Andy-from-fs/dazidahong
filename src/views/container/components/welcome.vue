<!--
Description
@authors Andy
@date    2017-09-13 09:52:49
@version 1.0.0
-->
<template>
  <div>
    <transition name="fade">
      <div v-if="show">
        <div class="btn" @click="show = false">进入{{second}}</div>
        <img src="../../../assets/pics/welcome.jpg" class="welcome-pic" @load="controllShow()">
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'welcome',
    data() {
      return {
        show: true,
        second: 5,
      }
    },
    methods: {
      controllShow() {
        console.log("loading finished");
        let context = this;
        setTimeout(() => {
          context.show = false;
        }, context.second * 1000);
        setInterval(()=>{
          context.second--;
        },1000);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .welcome-pic {
    width: 100%;
    z-index: 1000;
    height: 100%;
    position: fixed;
    top: 0;
  }

  .btn{
    position: fixed;
    top: 3em;
    right: 2em;
    background-color: rgba(40, 40, 40,.3);
    z-index: 1100;
    width: 4em;
    height: 1.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    color:#555;
    text-align: center;
    line-height: 1.5em;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in below version 2.1.8 */

  {
    opacity: 0
  } 
</style>