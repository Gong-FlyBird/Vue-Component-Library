<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'yellow' | 'white' | 'blue'

const props = withDefaults(defineProps<{
  label?: string
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
}>(), {
  label: 'PRESS ME',
  variant: 'yellow',
  size: 'md',
})

const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>()

const classes = computed(() => [
  'brutal-button',
  `brutal-button--${props.variant}`,
  `brutal-button--${props.size}`,
])
</script>

<template>
  <button
    :class="classes"
    type="button"
    @click="(ev) => emit('click', ev)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.brutal-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1.6rem;
  font-family: 'Arial Black', Arial, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #111;
  background: #ffd02f;
  border: 2px solid #111;
  border-radius: 0;
  box-shadow: 4px 4px 0 #111;
  cursor: pointer;
  user-select: none;
  transition: transform 100ms ease, box-shadow 100ms ease, background 150ms ease;
}

.brutal-button:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #111;
}

.brutal-button:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 #111;
}

.brutal-button:focus-visible {
  outline: 3px dashed #111;
  outline-offset: 4px;
}

.brutal-button--white {
  background: #f5f0e8;
}

.brutal-button--blue {
  background: #2f7df6;
  color: #f5f0e8;
}

.brutal-button--sm {
  padding: 0.4rem 1rem;
  font-size: 0.68rem;
  box-shadow: 3px 3px 0 #111;
}

.brutal-button--sm:hover {
  transform: translate(1.5px, 1.5px);
  box-shadow: 1.5px 1.5px 0 #111;
}

.brutal-button--sm:active {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 #111;
}

.brutal-button--lg {
  padding: 1rem 2.2rem;
  font-size: 0.95rem;
}
</style>
