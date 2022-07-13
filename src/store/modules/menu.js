import user from '@/api/user'
export default {
  namespaced: true,
  state: {
    menu: [],
    userInfo: {}
  },
  mutations: {
    handleGetUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    handleGetNav(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      const response = await user.getUserInfo()
      commit('handleGetUserInfo', response)
      return response
    },
    async getNav({ commit }) {
      const response = await user.getNav()
      commit('handleGetNav', response)
      return response
    }
  }
}
