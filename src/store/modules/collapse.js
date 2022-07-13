export default {
  namespaced: true,
  state: {
    isCollapse: false
  },
  mutations: {
    setCollapse(state, key) {
      state.isCollapse = key
    }
  },
  actions: {
    setisCollapse({ commit }, key) {
      commit('setCollapse', key)
    }
  }
}
