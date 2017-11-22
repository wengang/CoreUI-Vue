import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }

      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/Page404.vue')
    },
    {
      path: '/500',
      name: 'InternalError',
      component: () => import('@/views/Page500.vue')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/views/Page404.vue')
    }
  ]
})
