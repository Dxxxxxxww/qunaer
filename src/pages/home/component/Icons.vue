<template>
  <div class="container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((v, i) => {
        const page = Math.floor(i / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(v);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'
@import '../../../assets/styles/mixins.styl'

.container >>> .swiper-container
  width 100%
  height 0
  padding-bottom 50%
.container
  margin-top 0.1rem
  .icon
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    overflow hidden
    .icon-img
      position absolute
      top 0
      right 0
      bottom 0.44rem
      left 0
      padding 0.1rem
      box-sizing border-box
      .icon-img-content
        display block
        height 100%
        margin 0 auto
    .icon-desc
      position absolute
      right 0
      bottom 0
      left 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTestColor
      ellipsis()
</style>