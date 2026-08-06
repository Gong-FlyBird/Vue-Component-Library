<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)

function toggle() {
  on.value = !on.value
}
</script>

<template>
  <div class="brutal-toggle">
    <span class="brutal-toggle__label">{{ on ? 'ON' : 'OFF' }}</span>
    <button
      class="brutal-toggle__switch"
      :class="{ 'brutal-toggle__switch--on': on }"
      type="button"
      role="switch"
      :aria-checked="on"
      aria-label="toggle"
      @click="toggle"
    >
      <span class="brutal-toggle__knob"></span>
    </button>
  </div>
</template>

<style scoped>
.brutal-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
}

.brutal-toggle__label {
  font-family: 'Arial Black', Arial, sans-serif;
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: #111;
}

.brutal-toggle__switch {
  position: relative;
  width: 4.2rem;
  height: 2.2rem;
  padding: 0;
  background: #b7b2a9;
  border: 2px solid #111;
  border-radius: 0;
  box-shadow: 3px 3px 0 #111;
  cursor: pointer;
  transition: background 150ms ease;
}

.brutal-toggle__knob {
  position: absolute;
  top: 50%;
  left: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(-50%);
  background: #f5f0e8;
  border: 2px solid #111;
  transition: transform 200ms ease, background 150ms ease;
}

.brutal-toggle__switch--on {
  background: #7ee081;
}

.brutal-toggle__switch--on .brutal-toggle__knob {
  transform: translateY(-50%) translateX(2.05rem);
}

.brutal-toggle__switch:active {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 #111;
}

.brutal-toggle__switch:active .brutal-toggle__knob {
  background: #ffd02f;
}

.brutal-toggle__switch:focus-visible {
  outline: 3px dashed #111;
  outline-offset: 3px;
}
</style>
