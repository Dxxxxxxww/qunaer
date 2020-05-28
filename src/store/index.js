import Vuex from 'vuex'
import city from './modules/city'

export default Vuex.createStore({
  modules: {
    city,
  },
})
