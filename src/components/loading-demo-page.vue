<template>
  <div>
    <!-- 使用 LoadingOverlay 组件 -->
    <LoadingOverlay :show="loading" @closed="onLoadingClosed" />

    <v-container>
      <v-btn @click="startLoading">开始加载</v-btn>
      <v-btn @click="stopLoading">停止加载</v-btn>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LoadingOverlay from './layout/loading-page.vue' // 引入 LoadingOverlay 组件

// 控制加载状态的变量
const loading = ref(false)

// 开始加载
function startLoading() {
  loading.value = true

  // 模拟数据加载，2秒后停止加载
  setTimeout(() => {
    stopLoading()
  }, 5000)
}

// 停止加载
function stopLoading() {
  loading.value = false
}

// 处理关闭加载动画的事件
function onLoadingClosed() {
  console.log('加载页面已关闭')
}
</script>

<style>
/* 其他样式 */
</style>
