<template>
  <link
    rel="stylesheet"
    href="https://chinese-fonts-cdn.deno.dev/packages/maple-mono-cn/dist/MapleMono-CN-Regular/result.css"
  />
  <v-app>
    <ThemeBtn style="z-index: 999999999; position: relative" />
    <DemoPage />
  </v-app>
</template>

<script setup lang="ts">
import ThemeBtn from './components/common/theme-btn.vue'
import DemoPage from './components/demo-page.vue'
// import LoadingPage from './components/layout/loading-page.vue'
</script>

<style>
* {
  font-family: 'Maple Mono CN';
}
</style>
