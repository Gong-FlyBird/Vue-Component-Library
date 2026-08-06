<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'red' | 'blue'

const props = withDefaults(defineProps<{
  text?: string
  variant?: Variant
}>(), {
  text: 'BEST 1926',
  variant: 'red',
})

const classes = computed(() => [
  'bauhaus-badge',
  `bauhaus-badge--${props.variant}`,
])
</script>

<template>
  <span :class="classes">
    <span class="bauhaus-badge__inner">{{ text }}</span>
  </span>
</template>

<style scoped>
.bauhaus-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  background: #f2ede4;
  border: 4px solid #e03a3e;
  border-radius: 999px;
}

.bauhaus-badge__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  border: 2px solid #151515;
  border-radius: 999px;
  background: #f2c400;
  font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 900;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-align: center;
  text-transform: uppercase;
  color: #151515;
  transition: transform 250ms ease;
}

.bauhaus-badge:hover .bauhaus-badge__inner {
  transform: scale(1.12);
}

.bauhaus-badge--blue {
  border-color: #1d3f8f;
}

.bauhaus-badge--blue .bauhaus-badge__inner {
  background: #e03a3e;
  color: #f2ede4;
}
</style>
