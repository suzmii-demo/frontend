<template>
  <v-container>
    <v-btn @click="toggleTheme"> 切换主题（当前：{{ currentTheme }}) </v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// 使用自定义组合函数获取主题实例
const theme = useTheme()

// 当前主题名称（通过响应式计算属性获取）
const currentTheme = computed(() => theme.global.name.value)

// 切换主题函数：在 'light' 和 'dark' 间切换
function toggleTheme() {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  theme.global.name.value = newTheme
}
</script>
