<!--
Description
@authors Andy
@date    2017-09-14 11:03:02
@version 1.0.0
-->
<template>
  <div class="flow-container" ref="container">
    <div class="cover">
      <img :src="cover">
    </div>
    <div class="footer">
      <div class="like"><span class="icon-heart"></span>{{like}}</div>
      <div class="title">
        <p>{{goodsNum}}</p>
        <p>{{goodsName}}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'flowItem',
    props: ['cover', 'goodsName', 'goodsNum', 'like', 'float'],
  }
</script>

<style lang="scss" scoped>
  .flow-container {
    width: 100%;
    margin: 0 0 .5em 0;
    padding: .3em;
    box-shadow: 1px 1px 10px #888888;
    background-color: #fff;
    .cover {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

  .footer {
    padding: .5em 0 1em 0;
  }

  .title {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .like {
    float: right;
  }
</style>