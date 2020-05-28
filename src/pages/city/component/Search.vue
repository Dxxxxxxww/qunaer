<template>
  <div>
    <div class="search">
      <input
        v-model="keywordRef"
        class="search-ipt"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="wrapperRef" v-show="keywordRef">
      <ul>
        <li
          class="item border-bottom"
          v-for="item of listRef"
          :key="item.id"
          @click="onChangeCity(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="item border-bottom" v-show="hasNoDataRef">
          没有正确匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref, computed, watch, onMounted } from 'vue'
import { throttle } from '@/utils/utils'
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },
  setup(props) {
    const { wrapperRef } = useScrollLogic()
    const { keywordRef, listRef, hasNoDataRef } = useSearchLogic(props)
    const { onChangeCity } = useCityLogic(keywordRef)
    return { keywordRef, listRef, hasNoDataRef, wrapperRef, onChangeCity }
  },
}

function useScrollLogic() {
  const wrapperRef = ref(null)

  onMounted(() => {
    new BScroll(wrapperRef.value, { click: true })
  })

  return { wrapperRef }
}

function useSearchLogic(props) {
  const keywordRef = ref('')
  const listRef = ref([])
  const hasNoDataRef = computed(() => !listRef.value.length)

  watch(
    keywordRef,
    throttle(() => {
      if (!keywordRef.value.length) {
        listRef.value = []
        return
      }
      const list = []
      for (const k in props.cities) {
        for (const v of props.cities[k]) {
          if (
            v.spell.includes(keywordRef.value) ||
            v.name.includes(keywordRef.value)
          ) {
            list.push(v)
          }
        }
      }
      listRef.value = list
    }, 100)
  )

  return { keywordRef, listRef, hasNoDataRef }
}

function useCityLogic(keywordRef) {
  const store = useStore()
  const router = useRouter()

  function onChangeCity(city) {
    store.commit('city/changeCity', city)
    keywordRef.value = ''
    router.push('/')
  }

  return { onChangeCity }
}
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
