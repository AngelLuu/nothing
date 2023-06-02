import { defineStore } from 'pinia'
import { setToken } from '@/utils/auth'


interface User {
    id: String,
    fullName: String,
    username: String,
    email?: String,
    password: String,
    address?: String
}
const userStore = defineStore('user', {
    state: (): User => ({
        id: '',
        fullName: '',
        username: '',
        password: '',
        email: '',
        address: ''
    }),
    actions: {
        async login(username: String, password: String) {
            if (username === 'admin') {
                this.$patch(state => {
                    state.id = `${username}${password}`
                    state.fullName = username
                })
            } else {
                return {
                    code: 500,
                    msg: '账号和密码不对'
                }
            }
            setToken(`A-${username}${password}-Z`)
            return {
                code: 200,
                msg: '登录成功'
            }
        }
    },
    getters: {}
})

export default userStore