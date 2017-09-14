<template>
  <div class="series container">
    <!-- <div>series</div> -->
    <!-- <div v-if="isLardge">
      <big-item name="YFDSJ" likeNum="666" index='0' setColor1="#d9a784" setColor2="white" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></big-item>
      <big-item name="HAHA" likeNum="233" index="1" setColor1="#d9a784" setColor2="white" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test2.jpg"></big-item>
    </div> -->
    <div v-if="isMutle">
      <smart-item likeNum='456' isLardge="" setColor='#e1f3fd' name="YFDSJ" index='0' imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"
        float='left'></smart-item>
      <smart-item name='YA906椅子' likeNum='456' isLardge="" setColor='#e1f3fd' index="1" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"
        float='right'></smart-item>
      <div class="clear"></div>
      <smart-item name='YA899餐台连椅子' likeNum='456' isLardge="1" setColor='#fff' index="2" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <smart-item likeNum='456' isLardge="" setColor='#e1f3fd' name="YFDSJ" index='3' imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"
        float='left'></smart-item>
      <smart-item name='YA906椅子' likeNum='456' isLardge="" setColor='#e1f3fd' index="4" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"
        float='right'></smart-item>
      <div class="clear"></div>
      <smart-item name='YA899餐台连椅子' likeNum='456' isLardge="1" setColor='#fff' index="5" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <div class="clearfix"></div>
    </div>
    <div v-else-if="isFlow">
      <div class="_left column">
        <flow-item v-for="(item,index) in Europelist" :key='item.id' :goods-name="item.goodsName" :goods-num="item.goodsNum" :like="item.like"
          :cover="item.cover" v-if="Boolean(item.float==='left')"></flow-item>
      </div>
      <div class="_right column">
        <flow-item v-for="(item,index) in Europelist" :key='item.id' :goods-name="item.goodsName" :goods-num="item.goodsNum" :like="item.like"
          :cover="item.cover" v-if="Boolean(item.float==='right')"></flow-item>
      </div>
      <div class="clear"></div>
    </div>
    <div v-else class="other-container">
      <medium-item v-for="(item,index) of mediumList" :key="item.id" :title="item.title" :like="item.like" :cover="item.img" :index="index"
        setColor1="#d9a784" setColor2="white"></medium-item>
      <div class="clear"></div>
    </div>
    <!-- <smart-item></smart-item> -->
  </div>
</template>

<script>
  import bigItem from './components/big-item.vue';
  import smartItem from './components/smart-item.vue';
  import mediumItem from './components/medium-item.vue';
  import flowItem from './components/flow-item.vue';
  export default {
    name: 'series',
    data() {
      return {
        mediumList: [{
          'id': 0,
          'title': '4H008时尚墙身立柜',
          'like': 214,
          'img': "http://120.26.36.152/web_common/img/test/yanrong/big-item/test3.jpg",
        }, {
          'id': 1,
          'title': '4H008时尚墙身立柜',
          'like': 214,
          'img': "http://120.26.36.152/web_common/img/test/yanrong/big-item/test3.jpg",
        }, {
          'id': 2,
          'title': '4H008时尚墙身立柜',
          'like': 214,
          'img': "http://120.26.36.152/web_common/img/test/yanrong/big-item/test3.jpg",
        }, {
          'id': 3,
          'title': '4H008时尚墙身立柜',
          'like': 214,
          'img': "http://120.26.36.152/web_common/img/test/yanrong/big-item/test3.jpg",
        }, {
          'id': 4,
          'title': '4H008时尚墙身立柜',
          'like': 214,
          'img': "http://120.26.36.152/web_common/img/test/yanrong/big-item/test3.jpg",
        }],
        Europelist: [{
          id: 0,
          goodsName: "实木餐台椅组合",
          goodsNum: "845#",
          like: "36",
          cover: "/dist/pics/test1.jpg",
          float: "left"
        }, {
          id: 1,
          goodsName: "八人餐台椅组合",
          goodsNum: "214B",
          like: "23",
          cover: "/dist/pics/test2.jpg",
          float: "right"
        }, {
          id: 2,
          goodsName: "实木简欧餐台",
          goodsNum: "839A",
          like: "42",
          cover: "/dist/pics/test3.jpg",
          float: "left"
        }, {
          id: 3,
          goodsName: "实木餐台椅",
          goodsNum: "259#",
          like: "36",
          cover: "/dist/pics/test4.jpg",
          float: "right"
        },{
          id: 4,
          goodsName: "八人餐台椅组合",
          goodsNum: "214B",
          like: "23",
          cover: "/dist/pics/test2.jpg",
          float: "left"
        },{
          id: 5,
          goodsName: "实木餐台椅组合",
          goodsNum: "845#",
          like: "36",
          cover: "/dist/pics/test1.jpg",
          float: "right"
        }]
      }
    },
    computed: {
      // isLardge() {
      //   if (this.$route.meta.kind === 2) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
      isFlow() {
        if (this.$route.meta.kind === 2) {
          return true;
        } else {
          return false;
        }
      },
      isMutle() {
        if (this.$route.meta.kind === 0) {
          return true;
        } else {
          return false;
        }
      }
    },
    components: {
      'big-item': bigItem,
      'smart-item': smartItem,
      'medium-item': mediumItem,
      'flow-item': flowItem
    }
  }
</script>

<style scoped>
  .series {
    background-color: #e5e5e5;
  }
  .column{
    width: 50%;
    padding:.5em .5em 0 .5em;
  }
  
  ._left{
    padding-right: .25em;
  }
  ._right{
    padding-left: .25em;
  }
  /* .series {
    padding-bottom: 4em;
  } */
  /* .other-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: middle;
  } */
</style>