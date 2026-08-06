<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'indigo'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: Variant
    size?: Size
  }>(),
  {
    label: 'Continue',
    variant: 'primary',
    size: 'md',
  },
)

const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>()

const classes = computed(() => [
  'lin-button',
  `lin-button--${props.variant}`,
  `lin-button--${props.size}`,
])
</script>

<template>
  <button :class="classes" type="button" @click="(ev) => emit('click', ev)">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.lin-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.62rem 1.5rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition:
    background 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
}

.lin-button:active {
  transform: scale(0.98);
}

.lin-button:focus-visible {
  outline: 2px solid #5e6ad2;
  outline-offset: 2px;
}

.lin-button--primary {
  color: #0b0d10;
  background: #ffffff;
  border: 1px solid transparent;
}

.lin-button--primary:hover {
  background: #f2f2f2;
}

.lin-button--secondary {
  color: #e9eaee;
  background: #15161b;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.lin-button--secondary:hover {
  background: #1d1e23;
  border-color: rgba(255, 255, 255, 0.24);
}

.lin-button--indigo {
  color: #ffffff;
  background: #5e6ad2;
  border: 1px solid transparent;
}

.lin-button--indigo:hover {
  background: #6674e2;
  box-shadow: 0 4px 18px rgba(94, 106, 210, 0.4);
}

.lin-button--sm {
  padding: 0.42rem 1rem;
  font-size: 0.78rem;
}

.lin-button--lg {
  padding: 0.78rem 1.9rem;
  font-size: 0.92rem;
}
</style>
