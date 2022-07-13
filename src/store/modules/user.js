import user from '@/api/user'
import { setItem, getItem, removeItem } from '@/untis/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    logout(state) {
      state.token = ''
      removeItem('token', '')
    }
  },
  actions: {
    async getCaptcha({ commit }) {
      return await user.getCaptcha()
    },
    async Login({ commit }, ruleForm) {
      const token = await user.Login(ruleForm)
      if (token) {
        commit('setToken', token)
        return token
      }
    },
    logout({ commit }) {
      commit('logout')
    }
  }
}
