import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from 'axios';
import 'babel-polyfill';
import 'swiper/dist/css/swiper.css';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
fastClick.attach(document.body);
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
//--

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');