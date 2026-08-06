<script setup lang="ts">
withDefaults(defineProps<{
  text?: string
}>(), {
  text: 'EST. 1925',
})
</script>

<template>
  <span class="deco-badge">
    <span class="deco-badge__inner">{{ text }}</span>
  </span>
</template>

<style scoped>
.deco-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 7.6rem;
  height: 7.6rem;
  background: #10131f;
  clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
  box-shadow: inset 0 0 0 2px #d4af37;
  transition: transform 250ms ease;
}

.deco-badge:hover {
  transform: rotate(6deg);
}

.deco-badge__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.6rem;
  height: 5.6rem;
  clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
  background: #151a2b;
  box-shadow: inset 0 0 0 1px rgba(212, 175, 55, 0.65);
  font-family: 'Didot', Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e8d9a8;
  text-align: center;
  padding: 0 0.6rem;
}
</style>
