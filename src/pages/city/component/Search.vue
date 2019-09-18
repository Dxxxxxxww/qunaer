<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-ipt"
        type="text"
        placeholder="输入城市名或拼音"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <div class="search-content" ref="list" v-show="keyword">
      <ul>
        <li
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="onChangeCity(item.name)"
        >{{item.name}}</li>
        <li class="item border-bottom" v-show="hasNoData">没有正确匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { throttle } from "../../../utils/utils";
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword: throttle(function() {
      if (!this.keyword.length) {
        this.list = [];
        return;
      }
      const list = [];
      for (const k in this.cities) {
        for (const v of this.cities[k]) {
          if (v.spell.includes(this.keyword) || v.name.includes(this.keyword)) {
            list.push(v);
          }
        }
      }
      this.list = list;
    }, 100)
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.list, { click: true });
  },
  methods: {
    onChangeCity(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.keyword = "";
      this.$router.push("/");
    },
    onFocus() {
      this.focusSearch(true);
    },
    onBlur() {
      this.blurSearch(false);
    },
    ...mapMutations(["changeCity", "focusSearch", "blurSearch"])
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'

.search
  height 0.72rem
  padding 0 0.1rem
  background-color $bgColor
  .search-ipt
    box-sizing border-box
    width 100%
    height 0.62rem
    line-height 0.62rem
    padding 0 0.1rem
    border-radius 0.06rem
    text-align center
    color #666666
.search-content
  z-index 99
  position absolute
  top 1.58rem
  right 0
  bottom 0
  left 0
  overflow hidden
  background-color #cccccc
  .item
    line-height 0.76rem
    padding-left 0.2rem
    color #666666
    background-color #ffffff
</style>