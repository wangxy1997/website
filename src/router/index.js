import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/homePage/index')
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('@/views/layout/index')
    }
  ],
  mode: 'hash'
  // mode: 'history'
})
