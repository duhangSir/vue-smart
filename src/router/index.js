import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'layout',
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/',
    children: [
      {
        name: 'index',
        path: '/',
        component: () => import('@/views/index/index.vue')
      }
    ]
  },
  {
    name: 'sys',
    path: '/sys',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '系统管理'
    },
    children: [
      {
        name: 'sys-users',
        path: '/sys/users',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/sys-users/index.vue')
      },
      {
        name: 'sys-roles',
        path: '/sys/roles',
        meta: {
          title: '角色管理'
        },
        component: () => import('@/views/sys-roles/index.vue')
      },
      {
        name: 'sys-menus',
        path: '/sys/menus',
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/views/sys-menus/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
