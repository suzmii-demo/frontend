<template>
  <transition mode="out-in" name="overlay" @after-leave="onAfterLeave">
    <div v-if="visible" class="loading-overlay">
      <div class="loading-text">
        <!-- 每个字母设置不同的 animationDelay -->
        <span
          v-for="(letter, index) in letters"
          :key="index"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          {{ letter }}
        </span>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

interface Props {
  show: boolean // 是否显示加载页面
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'closed'): void
}>()

// 控制页面显示隐藏的内部状态
const visible = ref(props.show)

// 监听 props.show 变化，同步内部状态
watch(
  () => props.show,
  (newVal) => {
    visible.value = newVal
  },
)

// 加载文本，每个字母都会执行动画
const letters = 'LOADING'.split('')

// 动画退出结束后，可发出事件，通知外部加载页面已关闭
function onAfterLeave() {
  emit('closed')
}
</script>

<style scoped>
/* 整个加载页面样式，背景颜色和文字颜色使用 Vuetify 的主题 CSS 变量 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* 使用 Vuetify 提供的主题背景颜色 */
  background-color: var(--v-theme-background);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* loading 文字样式，颜色使用 Vuetify 的主题 on-background 色 */
.loading-text {
  font-size: 4rem;
  color: var(--v-theme-on-background);
  display: flex;
}

.loading-text span {
  display: inline-block;
  animation: letterAnim 3s infinite;
}

/* 字母动画：先一个个从右侧飞入，全部入场后再一个个从左侧飞出 */
@keyframes letterAnim {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  25% {
    transform: translateX(0);
    opacity: 1;
  }
  60% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

/* 整个加载页面进出场动画 */
/* 进入动画：从上方滑入 */
.overlay-enter-from {
  transform: translateY(-100%);
}
.overlay-enter-active {
  transition: transform 0.5s ease;
}
.overlay-enter-to {
  transform: translateY(0);
}

/* 退出动画：从下方向外滑出 */
.overlay-leave-from {
  transform: translateY(0);
}
.overlay-leave-active {
  transition: transform 0.5s ease;
}
.overlay-leave-to {
  transform: translateY(100%);
}
</style>
