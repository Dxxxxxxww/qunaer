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
import { computed } from 'vue'

export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array,
  },
  setup(props) {
    const swiperOption = {
      loop: true,
      pagination: '.swiper-pagination',
    }
    const showSwiper = computed(() => props.swiperList.length)
    return { swiperOption, showSwiper }
  },
}
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
