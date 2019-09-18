<template>
  <div>
    <div class="banner" @click="onBannerClick">
      <img class="banner-img" :src="bannerImg" alt />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="bannerImgs" @close="onGalleryClose" v-show="showGallery"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from "../../../common/gallery/Gallery";
import FadeAnimation from "../../../common/animation/fade/Fade";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallery: false
    };
  },
  methods: {
    onBannerClick() {
      this.showGallery = true;
    },
    onGalleryClose() {
      this.showGallery = false;
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  }
};
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    flex-direction row
    position absolute
    right 0
    bottom 0
    left 0
    line-height 0.6rem
    color #ffffff
    background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>