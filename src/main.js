import Vue, { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@babel/polyfill'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

// Vue.prototype.$axios = axios
// Vue.prototype.$bus = new Vue()
//--

createApp(App)
  .use(router)
  .use(store)
  .use(VueAwesomeSwiper)
  .mount('#app')
