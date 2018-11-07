import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/views/Login'
import BaseLayout from '@/views/BaseLayout'
import LtForm from '@/views/LtForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: BaseLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/ltform',
      name:'ltform',
      component:LtForm
    }
  ]
})
