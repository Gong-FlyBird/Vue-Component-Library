<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: 'default' | 'run'
  }>(),
  {
    label: 'EXECUTE',
    variant: 'default',
  },
)

const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>()

const display = computed(() => (props.variant === 'run' ? `▸ ${props.label}` : props.label))
</script>

<template>
  <button class="term-button" type="button" @click="(ev) => emit('click', ev)">
    {{ display }}
  </button>
</template>

<style scoped>
.term-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.66rem 1.6rem;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #33ff66;
  background: transparent;
  border: 1px solid #33ff66;
  border-radius: 0;
  text-shadow: 0 0 6px rgba(51, 255, 102, 0.6);
  cursor: pointer;
  user-select: none;
  transition:
    background 150ms ease,
    color 150ms ease,
    box-shadow 150ms ease,
    transform 100ms ease;
}

.term-button:hover {
  background: #33ff66;
  color: #0a0f0a;
  text-shadow: none;
  box-shadow: 0 0 18px rgba(51, 255, 102, 0.45);
}

.term-button:active {
  transform: translateY(2px);
}

.term-button:focus-visible {
  outline: 2px solid #33ff66;
  outline-offset: 3px;
}
</style>
