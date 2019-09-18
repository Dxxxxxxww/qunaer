<template>
  <div class="container">
    城市选择
    <router-link to="/">
      <div class="iconfont back-home">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'

.container
  position relative
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size 0.32rem
  color #ffffff
  background-color $bgColor
  .back-home
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #ffffff
</style>