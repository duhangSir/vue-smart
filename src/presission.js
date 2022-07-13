import router from '@/router'
import store from '@/store'
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
      // if (store.getters.userInfo && store.getters.menu) {
      //   next()
      // } else {
      //   const userInfo = store.dispatch('menu/getUserInfo')
      //   const nav = store.dispatch('menu/getNav')
      //   if (nav && userInfo) {
      //     console.log(userInfo)
      //     console.log(nav)
      //     next()
      //   }
      // }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
