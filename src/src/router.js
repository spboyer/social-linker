import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bootstrap',
      name: 'bootstrap',
      // route level code-splitting
      // this generates a separate chunk (bootstrap.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "bootstrap" */ './views/Bootstrap.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    }
  ]
})
