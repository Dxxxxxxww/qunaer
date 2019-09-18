<template>
  <div class="container">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: ".swiper-pagination"
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-pagination-bullet-active
  background-color #ffffff
.container
  width 100%
  height 0
  padding-bottom 30.4%
  overflow hidden
  background-color #eeeeee
  .swiper-img
    width 100%
</style>