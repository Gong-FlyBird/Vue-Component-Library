<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { X } from 'lucide-vue-next'
import CodePanel from './CodePanel.vue'

const props = defineProps<{
  id: string
  name: string
  en: string
  raw: string
}>()

const emit = defineEmits<{ close: [] }>()

const modalRef = ref<HTMLElement>()
const pos = reactive({ x: Math.round(window.innerWidth / 2) - 390, y: 96 })
const dragging = ref(false)
let startX = 0
let startY = 0
let origX = 0
let origY = 0

function onDown(e: MouseEvent) {
  if ((e.target as HTMLElement).closest('.modal-x')) return
  dragging.value = true
  startX = e.clientX
  startY = e.clientY
  origX = pos.x
  origY = pos.y
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

function onMove(e: MouseEvent) {
  if (!dragging.value) return
  const el = modalRef.value
  if (!el) return
  const mw = el.offsetWidth
  const mh = el.offsetHeight
  pos.x = Math.min(Math.max(origX + e.clientX - startX, 8), window.innerWidth - mw - 8)
  pos.y = Math.min(Math.max(origY + e.clientY - startY, 8), window.innerHeight - mh - 8)
}

function onUp() {
  dragging.value = false
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', onUp)
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', onUp)
})
</script>

<template>
  <div ref="modalRef" class="code-modal" :style="{ left: pos.x + 'px', top: pos.y + 'px' }">
    <div class="modal-head" :class="{ dragging }" @mousedown="onDown">
      <div>
        <p class="kicker mono">{{ en }} · VUE SFC</p>
        <h3 class="serif">{{ name }} — 源码</h3>
      </div>
      <button class="modal-x mono" title="关闭 (Esc)" @click="emit('close')">
        <X :size="15" />
      </button>
    </div>
    <CodePanel :id="id" :name="name" :en="en" :raw="raw" :back="false" />
  </div>
</template>

<style scoped>
.code-modal {
  position: fixed;
  z-index: 220;
  width: min(780px, calc(100vw - 32px));
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: 0 32px 90px -20px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}
.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px 10px 16px;
  border-bottom: 1px solid var(--line);
  background: var(--bg-2);
  cursor: move;
  user-select: none;
  touch-action: none;
}
.modal-head.dragging {
  cursor: grabbing;
}
.modal-head h3 {
  font-size: 15px;
  font-weight: 600;
  margin-top: 2px;
}
.modal-x {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink-3);
  transition: all 0.15s ease;
}
.modal-x:hover {
  color: var(--accent);
  border-color: var(--accent);
}
:deep(.code-panel) {
  border: none;
  border-radius: 0;
}
</style>
