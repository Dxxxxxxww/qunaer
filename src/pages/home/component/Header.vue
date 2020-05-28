<template>
  <div class="header">
    <div class="left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="center">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="right">
        {{ city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'HomeHeader',
  setup() {
    const store = useStore()
    const city = store.state.city.city
    return { city }
  },
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'

.header
  display flex
  flex-direction row
  line-height $headerHeight
  color #ffffff
  background-color #00bcd4
  .left
    width 0.64rem
    .back-icon
      font-size 0.4rem
      text-align center
  .center
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    border-radius 0.1rem
    color #ccc
    background-color #ffffff
  .right
    min-width 1.04rem
    padding 0 0.1rem
    text-align center
    color #ffffff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.2rem
</style>
