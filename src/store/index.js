import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import menu from './modules/menu'
import tagsview from './modules/tagsview'
import collapse from './modules/collapse'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    tagsview,
    collapse,
    menu,
    user
  }
})
