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
        meta: {requiresAuth: true}
    },
    {
        path: '/configuration',
        name: 'Configuration',
        component: () => import('../views/configuration/Configuration.vue'),
        meta: {requiresAuth: true}
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('../views/users/Users.vue'),
        meta: {requiresAuth: true, isAdmin: true},
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const isAdmin = role === 'ADMIN';
    if (to.meta.requiresAuth && token === null) return '/login';
    if (to.meta.isAdmin && !isAdmin) return '/reports';
});
export default router
