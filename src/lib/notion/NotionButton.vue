<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

withDefaults(defineProps<{ variant?: 'ghost' | 'accent' }>(), { variant: 'ghost' })
</script>

<template>
  <div class="stage">
    <button type="button" class="btn" :class="variant === 'accent' ? 'btn--accent' : ''">
      <Plus v-if="variant === 'accent'" :size="15" :stroke-width="2.4" />
      <slot>Add comment</slot>
    </button>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #ffffff;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f0f0ee;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.05rem;
  border: 1px solid #e3e3e0;
  border-radius: 4px;
  background: #fff;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #37352f;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.btn:hover {
  background: #f1f1ef;
}
.btn:active {
  transform: scale(0.98);
}
.btn:focus-visible {
  outline: 2px solid rgba(35, 131, 226, 0.45);
  outline-offset: 2px;
}
.btn--accent {
  background: #2383e2;
  border-color: transparent;
  color: #fff;
}
.btn--accent:hover {
  background: #1b74cd;
  box-shadow: 0 2px 6px rgba(35, 131, 226, 0.3);
}
.btn--accent:active {
  box-shadow: none;
}
</style>
