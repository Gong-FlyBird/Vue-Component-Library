<script setup lang="ts">
import { computed } from 'vue'
import { Rocket } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  label?: string
  size?: 'sm' | 'md' | 'lg'
}>(), {
  label: 'LAUNCH',
  size: 'md',
})

const classes = computed(() => [
  'neu-button',
  `neu-button--${props.size}`,
])
</script>

<template>
  <button :class="classes" type="button">
    <Rocket class="neu-button__icon" :size="props.size === 'lg' ? 20 : props.size === 'sm' ? 14 : 17" stroke-width="2.2" />
    <span class="neu-button__label"><slot>{{ label }}</slot></span>
  </button>
</template>

<style scoped>
.neu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.85rem 1.9rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  color: #5b6b85;
  background: #e0e5ec;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  user-select: none;
  box-shadow:
    6px 6px 12px #a3b1c6,
    -6px -6px 12px #ffffff,
    inset 1px 1px 2px rgba(255, 255, 255, 0.6),
    inset -1px -1px 2px rgba(163, 177, 198, 0.4);
  transition: box-shadow 200ms ease, transform 200ms ease, color 200ms ease;
}

.neu-button:hover {
  transform: translateY(-2px);
  box-shadow:
    9px 9px 18px #a3b1c6,
    -9px -9px 18px #ffffff,
    inset 1px 1px 2px rgba(255, 255, 255, 0.6),
    inset -1px -1px 2px rgba(163, 177, 198, 0.4);
  color: #43557a;
}

.neu-button:active {
  transform: translateY(1px);
  box-shadow:
    inset 6px 6px 12px #a3b1c6,
    inset -6px -6px 12px #ffffff;
  color: #43557a;
}

.neu-button:focus-visible {
  outline: 2px solid #a3b1c6;
  outline-offset: 3px;
}

.neu-button--sm {
  padding: 0.55rem 1.2rem;
  font-size: 0.78rem;
}

.neu-button--lg {
  padding: 1.05rem 2.4rem;
  font-size: 1rem;
}

.neu-button__icon {
  flex-shrink: 0;
}
</style>
