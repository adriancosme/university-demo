import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/report/Reports.vue'),
  },
  {
    path: '/configuration',
    name: 'Configuration',
    component: () => import('../views/configuration/Configuration.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
