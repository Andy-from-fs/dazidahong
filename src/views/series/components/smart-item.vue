<template>
  <div>
    <!-- smart-item -->
    <!-- <little-item></little-item> -->
    <div v-if="Boolean(this.$props.isLardge)">
      <big-item :name="name" :likeNum="likeNum" :index='index' :setColor1="setColor" :setColor2="setColor" :imgSrc="imgSrc"></big-item>
    </div>
    <div v-else>
      <little-item :name="name" :likeNum="likeNum" :index='index' :imgSrc="imgSrc"></little-item>
      <div class="clearfix" v-if="parseInt(index) % 3 === 2"></div>

    </div>
  </div>
</template>

<script>
  import bigItem from './big-item';
  import littleItem from './little-item.vue';
  export default {
    name: 'smart-item',
    props: ['name', 'imgSrc', 'likeNum', 'setColor', 'isLardge', 'index'],
    components: {
      'big-item': bigItem,
      'little-item': littleItem
    },
    // methods: {
    //   computeIsLardge() {
    //     // if()
    //   }
    // },
    created() {

    }
  }
</script>

<style scoped>

</style>