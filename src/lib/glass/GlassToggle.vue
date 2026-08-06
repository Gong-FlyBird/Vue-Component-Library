<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)
</script>

<template>
  <button
    type="button"
    class="glass-toggle"
    :class="{ 'glass-toggle--on': on }"
    role="switch"
    :aria-checked="on"
    @click="on = !on"
  >
    <span class="glass-toggle__knob"></span>
  </button>
</template>

<style scoped>
.glass-toggle {
  position: relative;
  width: 3.6rem;
  height: 2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(12px) saturate(1.4);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  box-shadow:
    inset 0 1px 3px rgba(2, 8, 32, 0.4),
    inset 0 -1px 0 rgba(255, 255, 255, 0.18),
    0 8px 18px rgba(2, 8, 32, 0.4);
  cursor: pointer;
  transition:
    background 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease;
}

.glass-toggle__knob {
  position: absolute;
  top: 50%;
  left: 3px;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #ffffff, #d8e2fb);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow:
    0 2px 6px rgba(2, 8, 32, 0.5),
    0 0 10px rgba(255, 255, 255, 0.35);
  transform: translateY(-50%);
  transition:
    transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 300ms ease,
    background 300ms ease;
}

.glass-toggle--on {
  border-color: rgba(150, 190, 255, 0.6);
  background: linear-gradient(90deg, rgba(96, 165, 250, 0.85), rgba(139, 92, 246, 0.8));
  box-shadow:
    inset 0 1px 3px rgba(2, 8, 32, 0.3),
    0 4px 18px rgba(90, 140, 255, 0.45);
}

.glass-toggle--on .glass-toggle__knob {
  transform: translate(1.7rem, -50%);
  background: linear-gradient(180deg, #ffffff, #e8f0ff);
  box-shadow:
    0 2px 6px rgba(2, 8, 32, 0.45),
    0 0 12px rgba(190, 210, 255, 0.95);
}

.glass-toggle:focus-visible {
  outline: 2px solid #7db4ff;
  outline-offset: 3px;
}
</style>
