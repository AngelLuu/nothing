import { createRouter, createWebHistory } from 'vue-router'
import { guard } from './guard/guard'
import { menuList } from '@/api/userApi'
const LAYOUT = import('@/layout/index.vue')

const modules = import.meta.glob('../views/**/index.vue')
console.log(modules)
const serverUrl = menuList()
serverUrl.forEach((item)=>{
    Object.assign(item,{
        component:LAYOUT
    })
    if(item.children){
        item.children.forEach(itemChild=>{
            Object.assign(itemChild,{
                component:modules[`../views${item.path}${itemChild.path}/index.vue`]
            })
        })
    }
})

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    name: 'login',
    path: '/login',
    component: import('@/views/login/index.vue')
},...serverUrl]





const router = createRouter({
    history: createWebHistory(),
    //@ts-ignore
    routes: [...routes]
})

guard(router)

export default router