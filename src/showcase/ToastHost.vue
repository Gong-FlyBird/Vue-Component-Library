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
          <component :is="iconFor(t.type)" :size="13" class="toast-icon" />
          <span class="mono">{{ t.message }}</span>
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
  gap: 9px;
  padding: 10px 16px;
  border-radius: var(--radius);
  background: var(--ink);
  color: var(--bg);
  font-size: 11.5px;
  letter-spacing: 0.06em;
  box-shadow: var(--shadow);
}
.toast-icon {
  flex-shrink: 0;
  color: var(--accent);
}
.toast.warn .toast-icon {
  color: #e8a33d;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
