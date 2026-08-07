<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { theme, toggleTheme } from './composables/useTheme'
import { navigate } from './router'
import { totalCount } from '../lib'

defineProps<{ onMenu: () => void }>()
</script>

<template>
  <header class="topbar">
    <button class="menu-btn" aria-label="菜单" @click="onMenu">
      <span />
      <span />
    </button>

    <button class="brand" @click="navigate({ name: 'home' })">
      <span class="brand-cn">高级审美组件档案馆</span>
      <span class="brand-en">ATELIER UI — COMPONENT ARCHIVE</span>
    </button>

    <div class="spacer" />

    <span class="total mono">{{ String(totalCount).padStart(2, '0') }} 组件</span>

    <button class="theme-btn" :title="theme === 'dark' ? '切换到亮色' : '切换到暗色'" @click="toggleTheme">
      <span class="theme-label mono">{{ theme === 'dark' ? 'LIGHT' : 'DARK' }}</span>
      <Moon v-if="theme === 'dark'" :size="14" />
      <Sun v-else :size="14" />
    </button>
  </header>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 14px;
  height: 52px;
  padding: 0 20px;
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.2;
  text-align: left;
}
.brand-cn {
  font-family: var(--serif);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.brand-en {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  color: var(--ink-3);
}
.spacer {
  flex: 1;
}
.total {
  font-size: 11px;
  color: var(--ink-2);
  border-left: 1px solid var(--line);
  padding-left: 14px;
}
.theme-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 30px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink-2);
  background: transparent;
  transition: all 0.2s ease;
}
.theme-btn:hover {
  color: var(--ink);
  border-color: var(--line-strong);
}
.theme-label {
  font-size: 10px;
  letter-spacing: 0.14em;
}
.menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
}
.menu-btn span {
  width: 16px;
  height: 1.5px;
  background: var(--ink-2);
}
@media (max-width: 860px) {
  .menu-btn {
    display: flex;
  }
  .total {
    display: none;
  }
}
</style>
