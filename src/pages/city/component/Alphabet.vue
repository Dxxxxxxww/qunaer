<template>
  <ul class="item-list" v-show="!isFocus">
    <li
      class="item"
      v-for="item in lettes"
      :key="item"
      :ref="item"
      @click="itemClick"
      @touchstart.prevent="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
import { throttle } from "../../../utils/utils";
import { mapState } from "vuex";
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    lettes() {
      const arr = [];
      for (const k in this.cities) {
        arr.push(k);
      }
      return arr;
    },
    ...mapState(["isFocus"])
  },
  data() {
    return {
      flag: false,
      topSearchBoxHeight: 79,
      letterHeight: 20,
      startY: 0
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    itemClick(e) {
      this.$bus.$emit("city-item-change", e.target.innerText);
    },
    onTouchStart() {
      this.flag = true;
    },
    onTouchMove: throttle(function(e) {
      if (this.flag) {
        const touchY = e.touches[0].clientY - this.topSearchBoxHeight;
        const index = Math.floor((touchY - this.startY) / this.letterHeight);
        if (index >= 0 && index < this.lettes.length) {
          this.$bus.$emit("city-item-change", this.lettes[index]);
        }
      }
    }, 16),
    onTouchEnd() {
      this.flag = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'

.item-list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgColor
</style>