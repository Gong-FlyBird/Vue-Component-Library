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
const size = reactive({ w: 0, h: 0 })
const dragging = ref(false)
const resizeDir = ref<Dir | null>(null)
let startX = 0
let startY = 0
let origX = 0
let origY = 0
let startRX = 0
let startRY = 0
let origW = 0
let origH = 0

type Dir = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

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
  const mw = size.w || el.offsetWidth
  const mh = size.h || el.offsetHeight
  pos.x = Math.min(Math.max(origX + e.clientX - startX, 8), window.innerWidth - mw - 8)
  pos.y = Math.min(Math.max(origY + e.clientY - startY, 8), window.innerHeight - mh - 8)
}

function onUp() {
  dragging.value = false
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', onUp)
}

function onResizeDown(e: MouseEvent, dir: Dir) {
  e.stopPropagation()
  const el = modalRef.value
  if (!el) return
  resizeDir.value = dir
  startRX = e.clientX
  startRY = e.clientY
  origW = size.w || el.offsetWidth
  origH = size.h || el.offsetHeight
  window.addEventListener('mousemove', onResizeMove)
  window.addEventListener('mouseup', onResizeUp)
}

function onResizeMove(e: MouseEvent) {
  const dir = resizeDir.value
  if (!dir) return
  const dx = e.clientX - startRX
  const dy = e.clientY - startRY
  const MIN_W = 520
  const MIN_H = 280
  let w = origW
  let h = origH
  let x = pos.x
  let y = pos.y
  if (dir.includes('e')) {
    w = Math.min(Math.max(origW + dx, MIN_W), window.innerWidth - x - 8)
  } else if (dir.includes('w')) {
    w = Math.min(Math.max(origW - dx, MIN_W), x + origW - 8)
    x = x + origW - w
  }
  if (dir.includes('s')) {
    h = Math.min(Math.max(origH + dy, MIN_H), window.innerHeight - y - 8)
  } else if (dir.includes('n')) {
    h = Math.min(Math.max(origH - dy, MIN_H), y + origH - 8)
    y = y + origH - h
  }
  pos.x = x
  pos.y = y
  size.w = w
  size.h = h
}

function onResizeUp() {
  resizeDir.value = null
  window.removeEventListener('mousemove', onResizeMove)
  window.removeEventListener('mouseup', onResizeUp)
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
  window.removeEventListener('mousemove', onResizeMove)
  window.removeEventListener('mouseup', onResizeUp)
})
</script>

<template>
  <div
    ref="modalRef"
    class="code-modal"
    :class="{ filled: size.h > 0 }"
    :style="{
      left: pos.x + 'px',
      top: pos.y + 'px',
      width: size.w ? size.w + 'px' : '',
      height: size.h ? size.h + 'px' : '',
    }"
  >
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
    <div v-for="d in (['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'] as Dir[])" :key="d" class="rz" :class="'rz-' + d" @mousedown="onResizeDown($event, d)"></div>
    <div class="resize-handle" title="拖动调整大小" @mousedown="onResizeDown($event, 'se')"></div>
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
.code-modal.filled {
  display: flex;
  flex-direction: column;
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
  flex-shrink: 0;
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
.resize-handle {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  z-index: 5;
  background: linear-gradient(
      135deg,
      transparent 46%,
      var(--ink-3) 46%,
      var(--ink-3) 52%,
      transparent 52%
    ),
    linear-gradient(
      135deg,
      transparent 60%,
      var(--ink-3) 60%,
      var(--ink-3) 66%,
      transparent 66%
    );
  opacity: 0.45;
  pointer-events: none;
}
.rz {
  position: absolute;
  z-index: 6;
}
.rz-n {
  top: 0;
  left: 10px;
  right: 10px;
  height: 8px;
  cursor: n-resize;
}
.rz-s {
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 8px;
  cursor: s-resize;
}
.rz-e {
  right: 0;
  top: 10px;
  bottom: 10px;
  width: 8px;
  cursor: e-resize;
}
.rz-w {
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 8px;
  cursor: w-resize;
}
.rz-nw {
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  cursor: nwse-resize;
}
.rz-ne {
  top: 0;
  right: 0;
  width: 14px;
  height: 14px;
  cursor: nesw-resize;
}
.rz-sw {
  bottom: 0;
  left: 0;
  width: 14px;
  height: 14px;
  cursor: nesw-resize;
}
.rz-se {
  bottom: 0;
  right: 0;
  width: 14px;
  height: 14px;
  cursor: nwse-resize;
}
:deep(.code-panel) {
  border: none;
  border-radius: 0;
}
.code-modal.filled :deep(.code-panel) {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.code-modal.filled :deep(.code-body) {
  flex: 1;
  min-height: 0;
}
.code-modal.filled :deep(.code-scroll) {
  max-height: none;
  height: 100%;
}
</style>
