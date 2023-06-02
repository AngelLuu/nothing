import { createPinia } from 'pinia'
import useUserStore from './modules/userStore'

const pinia = createPinia()

export { useUserStore }
export default pinia