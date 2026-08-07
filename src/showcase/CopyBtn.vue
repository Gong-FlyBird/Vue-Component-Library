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
  }>(),
  { label: '复制', size: 13 },
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
  <button class="copy-btn mono" @click="onCopy">
    <Check v-if="done" :size="size" class="done-icon" />
    <Copy v-else :size="size" />
    <span>{{ done ? '已复制' : label }}</span>
  </button>
</template>

<style scoped>
.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  letter-spacing: 0.08em;
  padding: 8px 14px;
  border: 1px solid var(--ink);
  border-radius: var(--radius);
  color: var(--ink);
  background: transparent;
  transition: all 0.18s ease;
}
.copy-btn:hover {
  background: var(--ink);
  color: var(--bg);
}
.copy-btn:active {
  transform: scale(0.97);
}
.done-icon {
  color: var(--accent);
}
</style>
