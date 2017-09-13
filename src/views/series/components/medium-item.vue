<template>
  <div class="medium-container" ref="container">
    <div class="cover">
      <img :src="cover">
    </div>
    <div class="footer">
      <div class="title">
        <div class="clear"></div>
        <p>{{goodsNum}}</p>
        <p>{{goodsName}}</p>
      </div>
      <div class="like"><span class="icon-heart"></span>{{like}}</div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'medium-item',
    props: ['title', 'like', 'cover', 'index', 'setColor1', 'setColor2'],
    data() {
      return {
        goodsNum: '',
        goodsName: '',
      }
    },
    methods: {
      cutString(ex) {
        return [ex.substr(0, 5), ex.substring(5)];
      },
      initBgColor(index, bgColor1, bgColor2, div) {
        let Color;
        // console.log(bgColor)
        if ((index % 4) === 0 || (index % 4) === 3) {
          Color = bgColor1
        } else {
          Color = bgColor2
        }
        // console.log(div);
        div.style.backgroundColor = Color;
      },
      initFloat(index, div) {
        let ways;
        if ((index % 2) === 0) {
          ways = 'left';
        } else {
          ways = 'right';
        }
        div.style.cssFloat = ways;
      }
    },
    mounted() {
      (function (content) {
        let strArarry = content.cutString(content.$props.title);
        content.goodsName = strArarry[1];
        content.goodsNum = strArarry[0];
      })(this);
      this.initBgColor(this.$props.index, this.$props.setColor1, this.$props.setColor2, this.$refs.container);
      this.initFloat(this.$props.index, this.$refs.container);
    }
  }
</script>

<style lang="sass" scoped>
  .medium-container {
    width: 49%;
    height: 13em;
    padding: 0 .3em .5em .3em;
    box-shadow: 1px 1px 10px #888888;
    margin: .2em 0;
    .cover {
      padding: .3em;
      height: 75%;
      overflow: hidden;
    }
    .footer {
      height: 25%;
      width: 100%;
      boxing-size: border-box;
      padding: .3em;
      position: relative;
    }
    .icon-heart {
      padding: 0 .5em 0 0;
    }
    .like {
      position: absolute;
      right: .3em;
      bottom: .3em;
      font-size: .8em;
    }
    .title {
      font-size: .9em;
      position: absolute;
      bottom: .3em;
      left: .3em;
    }
  }
</style>