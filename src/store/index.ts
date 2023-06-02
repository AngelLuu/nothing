import { createPinia } from 'pinia'
import useUserStore from './modules/userStore'
import useAppStore from './modules/appStore'

const pinia = createPinia()

export { useUserStore,useAppStore }
export default pinia