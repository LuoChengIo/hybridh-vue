import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '大概'
      },
      component: () => import('@/views/About.vue')
    },
    {
      path: '/404',
      name: '404',
      meta: {
        title: '404'
      },
      component: () => import('@/views/404.vue')
    },
    { path: '*', redirect: '/404' }
  ]
})

export default router
