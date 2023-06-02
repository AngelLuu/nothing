import { defineStore } from 'pinia'

const useAppStore = defineStore('appStore',{
    state:():any=>({
        isCollapse:false,
        theme:false
    }),
    actions:{
        collapseSwitch(){
            if(this.isCollapse){
                this.isCollapse = false
            }else{
                this.isCollapse = true
            }
        }
    }
})

export default useAppStore