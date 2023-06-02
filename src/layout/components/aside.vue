<template>
    <el-menu class="el-menu-vertical-demo" router :collapse="appStore.isCollapse" @open="handleOpen" @close="handleClose">
        <div v-for="item of menuList">
            <el-menu-item v-if="item.children.length <= 1" :index="item.path">
                <el-icon>
                    <setting />
                </el-icon>
                <span>{{ item.meta.locale }}</span>
            </el-menu-item>
            <el-sub-menu v-else :index="item.path">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ item.meta.locale }}</span>
                </template>
                <el-menu-item v-for="itemChild of item.children" :index="`${itemChild.path}`">{{itemChild.meta.locale}}</el-menu-item>
            </el-sub-menu>
        </div>
    </el-menu>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue'
import { useAppStore } from '@/store'
import { menuList as list } from '@/api/userApi'
//   import { storeToRefs } from 'pinia'
import {
    Location,
    Setting,
} from '@element-plus/icons-vue'

const appStore = useAppStore()
const menuList = reactive(list())
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
  
<style lang="scss" scoped>
.el-menu-vertical-demo {
    // width: 200px;
    min-height: 100vh;
}
</style>