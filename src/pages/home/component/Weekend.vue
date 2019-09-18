<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-container">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'

.title
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.item-img-container
  width 100%
  height 0
  padding-bottom 37.09%
  overflow hidden
  .item-img
    width 100%
.item-info
  flex 1
  padding 0.1rem
  min-width 0
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #cccccc
    ellipsis()
</style>