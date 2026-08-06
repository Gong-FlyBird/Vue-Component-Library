<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)
</script>

<template>
  <button
    type="button"
    class="hermes-toggle"
    :class="{ 'hermes-toggle--on': on }"
    role="switch"
    :aria-checked="on"
    @click="on = !on"
  >
    <span class="hermes-toggle__knob"></span>
  </button>
</template>

<style scoped>
.hermes-toggle {
  position: relative;
  width: 3.9rem;
  height: 2.1rem;
  border-radius: 999px;
  border: 1px solid rgba(28, 16, 7, 0.6);
  background: linear-gradient(180deg, #5f4129, #48311b);
  box-shadow:
    inset 0 2px 6px rgba(0, 0, 0, 0.4),
    inset 0 -1px 0 rgba(246, 239, 223, 0.1),
    0 6px 14px rgba(74, 47, 22, 0.35);
  cursor: pointer;
  transition:
    background 300ms ease,
    box-shadow 300ms ease;
}

.hermes-toggle::before {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 999px;
  border: 1px dashed rgba(246, 239, 223, 0.16);
  pointer-events: none;
}

.hermes-toggle__knob {
  position: absolute;
  top: 50%;
  left: 3px;
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 999px;
  border: 1px solid rgba(58, 38, 16, 0.65);
  background: radial-gradient(circle at 35% 30%, #f6e0a8, #cfa45e 55%, #8a6a35 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 3px 8px rgba(0, 0, 0, 0.45);
  transform: translateY(-50%);
  transition:
    transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 300ms ease;
}

.hermes-toggle--on {
  background: linear-gradient(180deg, #7d5a3c, #6b4b30);
  box-shadow:
    inset 0 2px 6px rgba(0, 0, 0, 0.35),
    0 0 18px rgba(185, 146, 79, 0.5),
    0 6px 14px rgba(74, 47, 22, 0.35);
}

.hermes-toggle--on .hermes-toggle__knob {
  transform: translate(1.9rem, -50%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.65),
    0 0 14px rgba(230, 200, 143, 0.8),
    0 3px 8px rgba(0, 0, 0, 0.4);
}

.hermes-toggle:focus-visible {
  outline: 2px solid #b9924f;
  outline-offset: 3px;
}
</style>
