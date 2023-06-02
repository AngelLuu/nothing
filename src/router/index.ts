import { createRouter, createWebHistory } from 'vue-router'
import { guard } from './guard/guard'
const routes = [{
    path: '/',
    redirect: '/index'
}, {
    name: 'login',
    path: '/login',
    component: import('@/views/login/index.vue')
},{
    name: 'index',
    path: '/index',
    component: import('@/layout/index.vue'),
    children:[{
        path:'',
        name:'dataView',
        component:import('@/views/index/index.vue')
    }]
}]

const router = createRouter({
    history: createWebHistory(),
    routes: [...routes]
})

guard(router)

export default router