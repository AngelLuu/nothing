import { Router } from "vue-router";
import { isLogin } from '@/utils/auth'

export const guard = (router:Router)=>{
    beforeEach(router)
}

function beforeEach(router:Router){
    router.beforeEach((from,to)=>{
        if(from.name != 'login'){
            if(!isLogin()){
                router.push('/login')
            }
        }
    })
}