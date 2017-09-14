<template>
  <div class="little-item" ref="container">
    <img :src="imgSrc">
    <div class="name-like-box">
      <div class="name">
        <p>{{name}}</p>
      </div>
      <div class="like">
        <p>
          <span class="icon-heart"></span> {{likeNum}}
        </p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'little-item',
    props: ['name', 'imgSrc', 'likeNum', 'index', 'float'],
    methods: {
      computeFloat(index) {
        let direction;
        console.log(this.$refs.container);
        if (this.$props.float === 'left') {
          direction = "left";
        } else if (this.$props.float === 'right') {
          direction = "right";
        }
        this.$refs.container.style.cssFloat = direction;
      }
    },
    mounted() {
      this.computeFloat(this.$props.index);
    }
  }
</script>

<style lang='scss' scoped>
  .little-item {
    width: 49%;
    text-align: center;
    margin-bottom: .4em;
    box-shadow: 1px 1px 10px #888888;
    background-color: white;
    .name-like-box {
      width: 95%;
      margin: auto;
      padding: 1em 0;
    }
    img {
      width: 95%;
      margin: 1em 0 0 0;
      height: 4.8em;
    }
    .name {
      text-align: left;
      width: 70%;
      font-size: 1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
      height: 1.3em;
      line-height: 1.5em;
    }
    .like {
      text-align: right;
      font-size: 1em;
      width: 30%;
      float: right;
      position: relative;
      top: 3px;
    }
  }
</style>