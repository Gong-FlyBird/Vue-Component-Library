<script setup lang="ts">
import { Coffee } from 'lucide-vue-next'

withDefaults(defineProps<{ variant?: 'roast' | 'milk' }>(), { variant: 'roast' })
</script>

<template>
  <div class="stage">
    <button type="button" class="btn" :class="variant === 'milk' ? 'btn--milk' : ''">
      <Coffee :size="15" :stroke-width="2.2" />
      <span class="label"><slot>Order a cup</slot></span>
    </button>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #e8dcc6;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 2.2rem;
  border: none;
  border-radius: 999px;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #f4ead8;
  background: linear-gradient(180deg, #7d5740 0%, #6f4e37 55%, #5f402c 100%);
  box-shadow:
    inset 0 1px 0 rgba(244, 234, 216, 0.28),
    0 6px 16px rgba(95, 64, 44, 0.35);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}
.btn:hover {
  filter: brightness(1.07);
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 0 rgba(244, 234, 216, 0.3),
    0 10px 22px rgba(95, 64, 44, 0.42);
}
.btn:active {
  transform: translateY(0) scale(0.98);
  filter: brightness(0.97);
  box-shadow:
    inset 0 1px 0 rgba(244, 234, 216, 0.2),
    0 3px 8px rgba(95, 64, 44, 0.3);
}
.btn:focus-visible {
  outline: 2px solid #b98a5e;
  outline-offset: 3px;
}
.btn--milk {
  color: #6f4e37;
  background: #f4ead8;
  border: 2px solid #6f4e37;
  box-shadow: 0 4px 10px rgba(95, 64, 44, 0.16);
}
.btn--milk:hover {
  filter: none;
  background: #efdfc6;
  box-shadow: 0 8px 16px rgba(95, 64, 44, 0.22);
}
.btn--milk:active {
  filter: brightness(0.98);
}
</style>
