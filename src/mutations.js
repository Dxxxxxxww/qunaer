export default {
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
      // eslint-disable-next-line no-empty
    } catch (error) {}
  },
  focusSearch(state, isFocus) {
    state.isFocus = isFocus;
  },
  blurSearch(state, isFocus) {
    state.isFocus = isFocus;
  }
};