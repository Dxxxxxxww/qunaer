let defaultCity

try {
  defaultCity = localStorage.city || '杭州'
} catch (e) {
  console.log(e)
}

const cityModule = {
  namespaced: true,
  state: () => ({
    city: defaultCity,
    letter: '',
  }),
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {
        console.log(e)
      }
    },
    scrollTo(state, letter) {
      state.letter = letter
    },
  },
}

export default cityModule
