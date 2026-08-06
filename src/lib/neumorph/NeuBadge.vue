<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
}>(), {
  text: 'SOFT & SMOOTH',
})
</script>

<template>
  <span class="neu-badge">
    <span class="neu-badge__inner">{{ text }}</span>
  </span>
</template>

<style scoped>
.neu-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1.4rem;
  background: #e0e5ec;
  border-radius: 999px;
  box-shadow:
    4px 4px 10px #a3b1c6,
    -4px -4px 10px #ffffff;
}

.neu-badge__inner {
  padding: 0.3rem 1rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #43557a;
  background: #e0e5ec;
  border-radius: 999px;
  box-shadow:
    inset 3px 3px 6px #a3b1c6,
    inset -3px -3px 6px #ffffff;
}
</style>
