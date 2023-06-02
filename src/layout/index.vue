<template>
    <div class="common-layout">
      <el-container>
        <el-aside class="left" width="200"><Aside></Aside></el-aside>
        <el-container class="right">
          <el-header><Header></Header></el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
  </template>

<script lang="ts" setup>
import Aside from './components/aside.vue'
import Header from './components/header.vue'
import {} from 'vue'
    
</script>

<style lang="scss" scoped>
.right{
    width: 100%;
}
.left{
    height: 100%;
}
</style>