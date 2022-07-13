import { setItem, getItem } from '@/untis/storage'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    tagsview: getItem('tagsView') || []
  },
  mutations: {
    AddTagsView(state, tags) {
      const temp = state.tagsview.find((item) => item.title === tags.title)
      if (!temp) {
        state.tagsview.push(tags)
        setItem('tagsView', state.tagsview)
      }
    },
    removeTagsView(state, { index, path, nowPath }) {
      state.tagsview.splice(index, 1)
      setItem('tagsView', state.tagsview)
      if (path === nowPath) {
        if (state.tagsview.length === index) {
          router.push(state.tagsview[state.tagsview.length - 1].path)
        } else {
          router.push(state.tagsview[index].path)
        }
      }
    }
  },
  actions: {
    addTagsView({ commit }, tags) {
      commit('AddTagsView', tags)
    },
    removeTasView({ commit }, obj) {
      commit('removeTagsView', obj)
    }
  }
}
