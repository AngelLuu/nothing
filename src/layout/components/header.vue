<!--  -->
<template>
    <div class="contianer">
        <div class="left">
            <el-button type="primary" :icon="Fold" v-if="!appStore.isCollapse" @click="btnCollapse" />
            <el-button type="primary" :icon="Expand" v-if="appStore.isCollapse" @click="btnCollapse" />
        </div>
        <div class="right">
            <el-switch v-model="theme" />
            <el-avatar shape="square" size="50" :src="imgUrl" />
        </div>
    </div>
</template>
<!-- <el-icon><Expand /></el-icon> -->
<script lang="ts" setup>
import { useAppStore } from '@/store'
import { Fold, Expand } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import imgUrl from "@/assets/de.png"

const appStore = useAppStore()
const {theme} = storeToRefs(appStore)
appStore

// const appStore = useAppStore()

const btnCollapse = () => {
    appStore.collapseSwitch()
}


</script>

<style lang="scss" scoped>
.contianer {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    .left{

    }
    .right{
        display: flex;
        align-items: center;
        *{
            margin-left: 10px;
        }
    }
}
</style>