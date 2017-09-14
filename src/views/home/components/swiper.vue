<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in pics" :key="item.id">
        <img :src="item.surface">
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  require('../../../assets/script/swiper.min.js');

  export default {
    data() {
      return {
        pics: [{
            'id': 0,
            'surface': 'http://120.26.36.152/web_common/img/test/yanrong/test/test1.jpg'
          },
          {
            'id': 1,
            'surface': 'http://120.26.36.152/web_common/img/test/yanrong/test/test2.jpg'
          },
          {
            'id': 2,
            'surface': 'http://120.26.36.152/web_common/img/test/yanrong/test/test3.jpg'
          }
        ],
        swiper: null,
      }
    },
    methods: {
      fnGetPicuresBack() {
        this.swiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          speed: 1000, //滑动速度
          loop: true,

          // autoplay: 5000,
          autoplayDisableOnInteraction: false, //用户操作后重新autoplay

          // 如果需要分页器
          pagination: '.swiper-pagination',
          paginationClickable: true,

          // 如果需要前进后退按钮
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',

          // 如果需要滚动条
          // scrollbar: '.swiper-scrollbar',
        });

      },
      // fnGetPicuresRes(res) {
      //   if (res.data) {
      //     this.pics = res.data;
      //   } else {
      //     this.pics = [{
      //         'id': 0,
      //         'surface': 'http://120.26.36.152/web_common/img/test/yanrong/test/test1.jpg'
      //       },
      //       {
      //         'id': 1,
      //         'surface': 'http://120.26.36.152/web_common/img/test/yanrong/test/test2.jpg'
      //       },
      //       {
      //         'id': 2,
      //         'surface': 'http://120.26.36.152/web_common/img/test/yanrong/test/test3.jpg'
      //       }
      //     ];
      //   }
      // },
      // fnGetPicures() {
      //   this.$http_get('/Ad/lists/', this.http_header, {
      //     place_id: 1
      //   }, this.fnGetPicuresRes, [], this.fnGetPicuresBack, [], this);
      // },
    },
    created() {
      // this.fnGetPicures();
    },
    mounted() {
      this.fnGetPicuresBack();
    }
  }
</script>

<style lang="scss" >
  @import'../../../assets/css/swiper.min.css';
  .swiper-pagination-bullet {
    background: transparent;
    border: 1px solid #fff;
    opacity: 1!important;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 10px;
    width: 100%;
    text-align: center;
  }

  .swiper-slide {
    width: 100%;
    height: 13em;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>