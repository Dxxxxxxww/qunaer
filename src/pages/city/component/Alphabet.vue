<template>
  <ul class="item-list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="(ele) => (elems[item] = ele)"
      @click="itemClick"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { ref, computed, onUpdated } from 'vue'
import { throttle } from '@/utils/utils'
import { useStore } from 'vuex'

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
  },
  setup(props) {
    const topSearchBoxHeight = 79
    const letterHeight = 20
    let flag = false
    let startY = 0
    const elems = ref([])
    // console.log('props', props) // props 是一个 reactive 不是 ref
    const letters = computed(() => {
      const arr = []
      for (const k in props.cities) {
        arr.push(k)
      }
      return arr
    })
    onUpdated(() => {
      startY = elems.value['A'].offsetTop
    })
    const store = useStore()

    function itemClick(e) {
      store.commit('city/scrollTo', e.target.innerText)
    }
    function onTouchStart(e) {
      flag = true
    }
    function onTouchEnd(e) {
      flag = false
    }
    const onTouchMove = throttle(function(e) {
      if (flag) {
        const touchY = e.touches[0].clientY - topSearchBoxHeight
        const index = Math.floor((touchY - startY) / letterHeight)
        if (index >= 0 && index < letters.value.length) {
          store.commit('city/scrollTo', letters.value[index])
        }
      }
    }, 20)

    return { letters, elems, onTouchStart, onTouchMove, onTouchEnd, itemClick }
  },
}
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
