<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/'+item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: ["recommendList"],
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'

.title
  line-height 0.8rem
  margin-top 0.2rem
  background-color #eee
  text-indent 0.2rem
.item
  display flex
  flex-direction row
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
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
    .item-btn
      line-height 0.44rem
      margin-top 0.16rem
      padding 0 0.2rem
      border-radius 0.06rem
      background-color #ff9300
</style>