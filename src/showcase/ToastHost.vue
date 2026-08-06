<script setup lang="ts">
import { toasts } from './composables/useToast'
import { Check, Info, TriangleAlert } from 'lucide-vue-next'

function iconFor(type?: string) {
  if (type === 'warn') return TriangleAlert
  if (type === 'info') return Info
  return Check
}
</script>

<template>
  <Teleport to="body">
    <div class="toast-host">
      <TransitionGroup name="toast">
        <div v-for="t in toasts" :key="t.id" class="toast" :class="t.type || 'success'">
          <component :is="iconFor(t.type)" :size="15" class="toast-icon" />
          <span>{{ t.message }}</span>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.toast-host {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
}
.toast {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border-strong);
  box-shadow: var(--shadow-lg);
  font-size: 13px;
  color: var(--text);
  backdrop-filter: blur(12px);
  max-width: 320px;
}
.toast-icon {
  flex-shrink: 0;
  color: #34c759;
}
.toast.warn .toast-icon {
  color: #ff9f0a;
}
.toast.info .toast-icon {
  color: #0a84ff;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.96);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
</style>
