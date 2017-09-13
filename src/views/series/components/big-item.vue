<template>
  <!-- <div>big-item</div> -->
  <div class="big-item container" ref="container">
    <img class="image" :src="imgSrc">
    <div class="name-like-box">
      <div class="item-name">{{name}}</div>
      <div class="like"><span class="icon-heart"></span>{{likeNum}}</div>
      <div class="clearfix"></div>
    </div>
    <!-- <div class="clearfix"></div> -->
  </div>
</template>

<script>
  export default {
    name: 'big-item',
    props: ['name', 'imgSrc', 'likeNum', 'setColor1', 'setColor2', 'index'],
    methods: {
      initBgColor(index, bgColor1, bgColor2) {
        let Color;
        // console.log(bgColor)
        if ((index % 2) === 0) {
          Color = bgColor1
        } else {
          Color = bgColor2
        }
        this.$refs.container.style.backgroundColor = Color;
      }
    },
    mounted() {
      this.initBgColor(this.$props.index, this.$props.setColor1, this.$props.setColor2);
    }
  }
</script>

<style scoped>
  .big-item {
    text-align: center;
    margin-bottom: .4em;
    box-shadow: 1px 1px 10px #888888;
  }

  .image {
    width: 95%;
    margin: 1em 0 0 0;
    height: 9.6em;
  }

  .name-like-box {
    width: 95%;
    margin: auto;
    padding: 1em 0;
  }

  .item-name {
    float: left;
  }

  .like {
    float: right;
  }

  .icon-heart {
    margin-right: 10px;
  }
</style>