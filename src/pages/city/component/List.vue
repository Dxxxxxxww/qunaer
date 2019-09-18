<template>
  <div class="container" ref="list">
    <div>
      <div>
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <button class="button">{{this.city}}</button>
        </div>
      </div>
      <div>
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <button
            class="button"
            v-for="item of hotCities"
            :key="item.id"
            @click="onChangeCity(item.name)"
          >{{item.name}}</button>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="v of item"
            :key="v.id"
            @click="onChangeCity(v.name)"
          >{{v.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array
  },
  computed: {
    ...mapState(["city"])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.list, { click: true });
    this.$bus.$on("city-item-change", letter => {
      this.scrollToElem(letter);
    });
  },
  methods: {
    scrollToElem(letter) {
      const elem = this.$refs[letter][0];
      this.scroll.scrollToElement(elem);
    },
    onChangeCity(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'

.border-topbottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.border-bottom
  &:before
    border-color #cccccc
.container
  position absolute
  top 1.58rem
  right 0
  bottom 0
  left 0
  overflow hidden
  .title
    line-height 0.54rem
    padding-left 0.2rem
    font-size 0.26rem
    color #666666
    background-color #eeeeee
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button
      float left
      width 30%
      margin 0.1rem
      padding 0.1rem 0
      border 0.02rem solid #cccccc
      border-radius 0.06rem
      text-align center
      background-color #ffffff
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>