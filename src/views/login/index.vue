<!--  -->
<template>
    <div id="contianer">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>登录</span>
                </div>
            </template>
            <div>
                <el-form ref="formRef" :rules="userRules" label-position="right" label-width="100px" :model="userForm"
                    style="max-width: 460px">
                    <el-form-item label="账号" prop='username'>
                        <el-input v-model="userForm.username" />
                    </el-form-item>
                    <el-form-item label="密码" prop='password'>
                        <el-input v-model="userForm.password" type="password" show-password />
                    </el-form-item>
                    <el-form-item class="btnBox">
                        <el-button type="primary" @click='submit(formRef)' round>登录</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'

const formRef = ref()
const userStore = useUserStore()
const router = useRouter()

const userForm = reactive({
    username: '',
    password: ''
})

const userRules = reactive({
    username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const submit = (formEl: any | undefined) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
        if (valid) {
            const loginFlag = userStore.login(userForm.username, userForm.password)
            loginFlag.then(res => {
                if (res.code == 200) {
                    router.push('/index')
                } else {
                    //@ts-ignore
                    ElMessage({
                        showClose: true,
                        message: res.msg,
                        type: 'error',
                    })
                }
            })
        } else {
            return false
        }
    })
}



</script>

<style lang="scss" scoped>
#contianer {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card-header {
    text-align: center;
}

span {
    font-size: 30px;
}

.btnBox {
    text-align: center;
}

el-form-item {
    margin-bottom: 15px;
}
</style>