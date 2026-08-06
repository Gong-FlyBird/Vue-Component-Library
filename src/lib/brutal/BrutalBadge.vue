<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'yellow' | 'blue' | 'pink' | 'green'

const props = withDefaults(defineProps<{
  label?: string
  variant?: Variant
  rotate?: number
}>(), {
  label: 'NEW',
  variant: 'yellow',
  rotate: -4,
})

const style = computed(() => ({
  transform: `rotate(${props.rotate}deg)`,
}))

const classes = computed(() => [
  'brutal-badge',
  `brutal-badge--${props.variant}`,
])
</script>

<template>
  <span :class="classes" :style="style">
    <slot>{{ label }}</slot>
  </span>
</template>

<style scoped>
.brutal-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1rem;
  font-family: 'Arial Black', Arial, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 900;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #111;
  border: 2px solid #111;
  border-radius: 0;
  box-shadow: 2px 2px 0 #111;
  white-space: nowrap;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.brutal-badge:hover {
  transform: rotate(0deg) translateY(-2px);
  box-shadow: 4px 4px 0 #111;
}

.brutal-badge--yellow { background: #ffd02f; }
.brutal-badge--blue { background: #2f7df6; color: #f5f0e8; }
.brutal-badge--pink { background: #ff4d6d; color: #f5f0e8; }
.brutal-badge--green { background: #7ee081; }
</style>
