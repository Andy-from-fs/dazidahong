<template>
  <div class="series container">
    <!-- <div>series</div> -->
    <div v-if="isLardge">
      <big-item name="YFDSJ" likeNum="666" index='0' setColor1="#d9a784" setColor2="white" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></big-item>
      <big-item name="HAHA" likeNum="233" index="1" setColor1="#d9a784" setColor2="white" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test2.jpg"></big-item>
    </div>
    <div v-else-if="isMutle">
      <smart-item likeNum='456' isLardge="1" setColor='#e1f3fd' name="YFDSJ" index='0' imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <smart-item name='YA906椅子' likeNum='456' isLardge="" setColor='#e1f3fd' index="1" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <smart-item name='YA899餐台连椅子' likeNum='456' isLardge="" setColor='#e1f3fd' index="2" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <smart-item likeNum='456' isLardge="1" setColor='#e1f3fd' name="YFDSJ" index='3' imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <smart-item name='YA906椅子' likeNum='456' isLardge="" setColor='#e1f3fd' index="4" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <smart-item name='YA899餐台连椅子' likeNum='456' isLardge="" setColor='#e1f3fd' index="5" imgSrc="http://120.26.36.152/web_common/img/test/yanrong/big-item/test1.jpg"></smart-item>
      <div class="clearfix"></div>
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
        }]
      }
    },
    computed: {
      isLardge() {
        if (this.$route.meta.kind === 2) {
          return true;
        } else {
          return false;
        }
      },
      isMutle() {
        if (this.$route.meta.kind === 1) {
          return true;
        } else {
          return false;
        }
      }
    },
    components: {
      'big-item': bigItem,
      'smart-item': smartItem,
      'medium-item': mediumItem
    }
  }
</script>

<style scoped>
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