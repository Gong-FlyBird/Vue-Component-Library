<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { theme, toggleTheme } from './composables/useTheme'
import { navigate } from './router'

defineProps<{ onMenu: () => void }>()
</script>

<template>
  <header class="topbar">
    <button class="menu-btn" aria-label="菜单" @click="onMenu">
      <span />
      <span />
      <span />
    </button>

    <button class="brand" @click="navigate({ name: 'home' })">
      <span class="brand-mark">A</span>
      <span class="brand-name">Atelier UI</span>
    </button>

    <div class="spacer" />

    <button class="theme-btn" :title="theme === 'dark' ? '切换到亮色' : '切换到暗色'" @click="toggleTheme">
      <Sun v-if="theme === 'dark'" :size="16" />
      <Moon v-else :size="16" />
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
  gap: 12px;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(18px) saturate(1.5);
  -webkit-backdrop-filter: blur(18px) saturate(1.5);
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
}
.brand-mark {
  width: 28px;
  height: 28px;
  border-radius: 9px;
  background: var(--grad-brand);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 15px;
  font-weight: 800;
  font-family: var(--serif);
  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.4);
}
.spacer {
  flex: 1;
}
.theme-btn {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-2);
  transition: all 0.2s ease;
}
.theme-btn:hover {
  color: var(--text);
  border-color: var(--border-strong);
  transform: rotate(12deg);
}
.menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border-radius: 8px;
}
.menu-btn span {
  width: 16px;
  height: 2px;
  background: var(--text-2);
  border-radius: 2px;
}
@media (max-width: 860px) {
  .menu-btn {
    display: flex;
  }
}
</style>
