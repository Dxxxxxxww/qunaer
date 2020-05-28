<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import CityHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  setup() {
    const { data } = useCityLogic()
    return data
  },
}
/**
 * @description 处理城市逻辑
 */
function useCityLogic() {
  const data = reactive({
    cities: {},
    hotCities: [],
  })

  async function getCityInfo() {
    let res = await axios.get('/api/city.json')
    res = res.data
    if (res.ret) {
      const result = res.data
      data.cities = result.cities
      data.hotCities = result.hotCities
    }
  }
  onMounted(getCityInfo)

  return { data }
}
</script>

<style lang="stylus" scoped></style>
