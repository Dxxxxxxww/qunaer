import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home';
import City from '../pages/city/City';
import Detail from '../pages/detail/Detail';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('../pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('../pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    props: (route) => ({
      idid: route.params.id
    }),
    component: () => import('../pages/detail/Detail')
  }],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});