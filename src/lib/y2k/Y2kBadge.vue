<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  text?: string
  rotate?: number
}>(), {
  text: 'CUTEST',
  rotate: -6,
})

const style = computed(() => ({
  transform: `rotate(${props.rotate}deg)`,
}))
</script>

<template>
  <span class="y2k-badge" :style="style">
    <span class="y2k-badge__shine" aria-hidden="true"></span>
    <span class="y2k-badge__text">{{ text }}</span>
  </span>
</template>

<style scoped>
.y2k-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.7rem;
  border: 3px solid #ffffff;
  border-radius: 999px;
  background: linear-gradient(135deg, #ff9fb4 0%, #b28df8 50%, #7fd8f7 100%);
  box-shadow:
    0 6px 14px rgba(178, 141, 248, 0.45),
    inset 0 -3px 6px rgba(31, 31, 46, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.7);
  font-family: 'Verdana', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(31, 31, 46, 0.35);
  white-space: nowrap;
  transition: transform 200ms ease;
}

.y2k-badge:hover {
  transform: rotate(0deg) translateY(-3px) scale(1.05);
}

.y2k-badge__shine {
  position: absolute;
  top: 0.3rem;
  left: 15%;
  right: 15%;
  height: 40%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), transparent);
  border-radius: 999px;
  pointer-events: none;
}
</style>
