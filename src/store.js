import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

export default Vuex.createStore({
  state,
  // action: {
  //   changeCity(ctx, city) {
  //     ctx.commit('changeCity', city);
  //   }
  // },
  mutations,
  getters: {
    doubleCity(state) {
      return state.city + ' ' + state.city;
    }
  }
});