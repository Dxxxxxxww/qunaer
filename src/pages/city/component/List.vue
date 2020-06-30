<template>
  <div class="container" ref="wrapperRef">
    <div>
      <div>
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <button class="button">{{ city }}</button>
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
          >
            {{ item.name }}
          </button>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="(elem) => (elemsRef[key] = elem)"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="v of item"
            :key="v.id"
            @click="onChangeCity(v.name)"
          >
            {{ v.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed, watch, onMounted } from 'vue'
import BScroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const { city, onChangeCity } = useCityLogic(store, router)
    const { elemsRef, wrapperRef } = useLetterLogic(store)

    return { city, onChangeCity, elemsRef, wrapperRef }
  },
}
/**
 * @description 城市逻辑
 */
function useCityLogic(store, router) {
  const city = computed(() => store.state.city.city)
  console.log(city)
  /**
   * @description 更改城市
   * @param {string} city 城市
   */
  function onChangeCity(city) {
    store.commit('city/changeCity', city)
    router.push('/')
  }

  return { city, onChangeCity }
}
/**
 * @description 字母逻辑
 */
function useLetterLogic(store) {
  let scroll = null
  const elemsRef = ref({})
  const wrapperRef = ref(null)

  // 这里出过问题，谨记，setup 只执行一次，如果直接获取了 letter 的话，它只是初始值，并不是一个响应式的对象，当 store 改变的时候，letter 不会随之改变
  // let letter = store.state.city.letter
  // 如果想要正确的监听，必须使用 computed 计算一下。
  // 原理同 vue2.x 在计算属性里的 mapState
  const letterRef = computed(() => store.state.city.letter)

  watch(letterRef, (value) => {
    // console.log(letterRef, letter, store.state.city, store.state.city.letter)
    if (value && scroll) {
      scrollToElem(value)
    }
  })

  onMounted(() => {
    scroll = new BScroll(wrapperRef.value, { click: true })
  })

  function scrollToElem(letter) {
    const elem = elemsRef.value[letter]
    scroll.scrollToElement(elem)
  }

  return { elemsRef, wrapperRef }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'

.border-topbottom
  &:before
    border-color: #cccccc
  &:after
    border-color: #cccccc
.border-bottom
  &:before
    border-color: #cccccc
.container
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
  .title
    line-height: 0.54rem
    padding-left: 0.2rem
    font-size: 0.26rem
    color: #666666
    background-color: #eeeeee
  .button-list
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button
      float: left
      width: 30%
      margin: 0.1rem
      padding: 0.1rem 0
      border: 0.02rem solid #cccccc
      border-radius: 0.06rem
      text-align: center
      background-color: #ffffff
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>
