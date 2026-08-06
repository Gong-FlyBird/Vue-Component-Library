<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)

function toggle() {
  on.value = !on.value
}
</script>

<template>
  <button
    class="neu-toggle"
    :class="{ 'neu-toggle--on': on }"
    type="button"
    role="switch"
    :aria-checked="on"
    aria-label="power toggle"
    @click="toggle"
  >
    <span class="neu-toggle__knob"></span>
  </button>
</template>

<style scoped>
.neu-toggle {
  position: relative;
  width: 4.4rem;
  height: 2.4rem;
  padding: 0;
  background: #d6dbe4;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow:
    inset 5px 5px 10px #a3b1c6,
    inset -5px -5px 10px #ffffff;
  transition: background 250ms ease, box-shadow 250ms ease;
}

.neu-toggle__knob {
  position: absolute;
  top: 50%;
  left: 0.3rem;
  width: 1.8rem;
  height: 1.8rem;
  transform: translateY(-50%);
  background: #e0e5ec;
  border-radius: 999px;
  box-shadow:
    4px 4px 8px #a3b1c6,
    -4px -4px 8px #ffffff,
    inset 1px 1px 2px rgba(255, 255, 255, 0.8);
  transition: transform 250ms ease, background 250ms ease;
}

.neu-toggle--on {
  background: #c9ddc2;
  box-shadow:
    inset 5px 5px 10px #9db8a4,
    inset -5px -5px 10px #f2ffef;
}

.neu-toggle--on .neu-toggle__knob {
  transform: translateY(-50%) translateX(2rem);
}

.neu-toggle:active .neu-toggle__knob {
  box-shadow:
    inset 3px 3px 6px #a3b1c6;
}

.neu-toggle:focus-visible {
  outline: 2px solid #a3b1c6;
  outline-offset: 3px;
}
</style>
