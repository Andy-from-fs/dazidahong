<!--
Description
@authors Andy
@date    2017-09-13 09:55:42
@version 1.0.0
-->
<template>
  <ul class="footer">
    <li class="nav">
      <span class="icon-video"></span>
      <p>企业视频</p>
    </li>
    <li class="nav">
      <span class="icon-phone-outline"></span>
      <p>联系我们</p>
    </li>
    <li class="nav">
      <span class="icon-briefcase"></span>
      <p>招聘信息</p>
    </li>
    <li class="nav">
      <span class="icon-shop"></span>
      <p>招商加盟</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang="scss" scoped>
  @import'../../../assets/icomoon/style.css';
  .footer {
    width: 100%;
    height: 3.5em;
    background-color: #333;
    color: #fff; // padding:.3em .5em;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    z-index: 900;

    .nav {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      span {
        font-size: 1.4em;
      }
      p {
        font-size: .5em;
      }
    }
  }
</style>