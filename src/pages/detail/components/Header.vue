<template>
  <div>
    <router-link to="/" v-show="showAbs">
      <div class="header-abs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </div>
    </router-link>
    <router-link :to="{name:'Home'}" v-show="!showAbs" :style="opacityStyle">
      <div class="header-fixed">
        <div class="iconfont header-fixed-back">&#xe624;</div>景点详情
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    // this.initScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    // this.initScroll();
  },
  methods: {
    onScroll() {
      const top =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
    //可以用路由的方式解决
    // initScroll() {
    //   const top = document.documentElement.scrollTop;
    //   if (top !== 0) {
    //     document.documentElement.scrollTop = 0;
    //     this.showAbs = true;
    //   }
    // }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'

.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-radius 50%
  background-color rgba(0, 0, 0, 0.8)
  .header-abs-back
    font-size 0.4rem
    color #ffffff
.header-fixed
  z-index 2
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size 0.32rem
  color #ffffff
  background-color $bgColor
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #ffffff
</style>