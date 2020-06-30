<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'
import { reactive, ref, computed, onMounted, onActivated } from 'vue'
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
import HomeIcons from './component/Icons'
import HomeRecommend from './component/Recommend'
import HomeWeekend from './component/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  setup() {
    return useGetHome()
  },
}
/**
 * @description 处理主页逻辑
 */
function useGetHome() {
  // reactive 适合包装对象。因为 reactive 是深度的，所以嵌套的数组，对象都适合使用 reactive
  // const data = reactive({
  //   swiperList: [],
  //   iconList: [],
  //   recommendList: [],
  //   weekendList: [],
  // })
  // 基本类型，基本类型数组可以使用 ref
  const swiperList = ref([])
  const iconList = ref([])
  const recommendList = ref([])
  const weekendList = ref([])
  const store = useStore()
  const city = computed(() => store.state.city.city)

  onMounted(getHomeInfo)

  // 目前来说 onActivated 失效了，不知道是 bug 还是以后版本会废弃
  // onActivated(() => {
  //   if (city !== data.lastCity) {
  //     data.lastCity = city
  //     getHomeInfo()
  //   }
  // })

  async function getHomeInfo() {
    let res = await axios.get('/static/mock/index.json?city=' + city)
    res = res.data
    if (res.ret) {
      const result = res.data
      swiperList.value = result.swiperList
      iconList.value = result.iconList
      recommendList.value = result.recommendList
      weekendList.value = result.weekendList
    }
  }

  return { swiperList, iconList, recommendList, weekendList }
}
</script>

<style></style>
