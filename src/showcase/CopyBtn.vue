<script setup lang="ts">
import { ref } from 'vue'
import { Check, Copy } from 'lucide-vue-next'
import { copyText } from './composables/useClipboard'
import { pushToast } from './composables/useToast'

const props = withDefaults(
  defineProps<{
    text: string
    label?: string
    size?: number
    iconOnly?: boolean
  }>(),
  { label: '复制', size: 15, iconOnly: false },
)

const done = ref(false)
let timer: number | undefined

async function onCopy() {
  const ok = await copyText(props.text)
  if (!ok) {
    pushToast('复制失败，请手动选择代码', 'warn')
    return
  }
  done.value = true
  pushToast('已复制到剪贴板')
  window.clearTimeout(timer)
  timer = window.setTimeout(() => (done.value = false), 1600)
}
</script>

<template>
  <button class="copy-btn" :class="{ 'icon-only': iconOnly }" @click="onCopy">
    <Check v-if="done" :size="size" class="done-icon" />
    <Copy v-else :size="size" />
    <span v-if="!iconOnly">{{ done ? '已复制' : label }}</span>
  </button>
</template>

<style scoped>
.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--text-2);
  font-size: 12px;
  transition: all 0.18s ease;
}
.copy-btn:hover {
  color: var(--text);
  border-color: var(--border-strong);
  background: var(--surface-3);
}
.copy-btn:active {
  transform: scale(0.95);
}
.copy-btn.icon-only {
  padding: 6px;
  border-radius: 8px;
}
.done-icon {
  color: #34c759;
}
</style>
