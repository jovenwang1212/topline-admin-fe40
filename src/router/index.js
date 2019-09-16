import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home'
import Login from '../views/login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
  ]
})
