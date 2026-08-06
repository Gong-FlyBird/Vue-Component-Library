<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)

function toggle() {
  on.value = !on.value
}
</script>

<template>
  <div class="neon-toggle">
    <button
      class="neon-toggle__track"
      :class="{ 'neon-toggle__track--on': on }"
      type="button"
      role="switch"
      :aria-checked="on"
      aria-label="circuit power switch"
      @click="toggle"
    >
      <span class="neon-toggle__traces" aria-hidden="true"></span>
      <span class="neon-toggle__knob">
        <span class="neon-toggle__dot" aria-hidden="true"></span>
      </span>
    </button>

    <span class="neon-toggle__readout" :class="{ 'neon-toggle__readout--on': on }">
      {{ on ? 'POWER ON' : 'STANDBY' }}
    </span>
  </div>
</template>

<style scoped>
.neon-toggle {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.neon-toggle__track {
  position: relative;
  width: 92px;
  height: 40px;
  padding: 0;
  background: #0a0f1a;
  border: 1px solid rgba(0, 240, 255, 0.35);
  border-radius: 5px;
  cursor: pointer;
  transition:
    border-color 250ms ease,
    box-shadow 250ms ease;
}

.neon-toggle__traces {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(90deg, rgba(0, 240, 255, 0.25) 0 1px, transparent 1px 13px),
    linear-gradient(
      180deg,
      transparent calc(50% - 0.5px),
      rgba(0, 240, 255, 0.2) calc(50% - 0.5px),
      rgba(0, 240, 255, 0.2) calc(50% + 0.5px),
      transparent calc(50% + 0.5px)
    );
  background-repeat: repeat-x, no-repeat;
  background-position: 0 5px, 0 0;
  opacity: 0.55;
  pointer-events: none;
}

.neon-toggle__knob {
  position: absolute;
  top: 4px;
  left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #0d1526;
  border: 1px solid rgba(0, 240, 255, 0.55);
  border-radius: 4px;
  transition:
    transform 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;
}

.neon-toggle__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(0, 240, 255, 0.55);
  transition:
    background 250ms ease,
    box-shadow 250ms ease;
}

.neon-toggle__track--on {
  border-color: #00f0ff;
  box-shadow:
    0 0 20px rgba(0, 240, 255, 0.45),
    inset 0 0 18px rgba(0, 240, 255, 0.14);
}

.neon-toggle__track--on .neon-toggle__knob {
  transform: translateX(52px);
  border-color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.6);
}

.neon-toggle__track--on .neon-toggle__dot {
  background: #00f0ff;
  box-shadow:
    0 0 10px #00f0ff,
    0 0 22px rgba(0, 240, 255, 0.8);
}

.neon-toggle__readout {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: #2c4a58;
  transition:
    color 250ms ease,
    text-shadow 250ms ease;
}

.neon-toggle__readout--on {
  color: #00f0ff;
  text-shadow: 0 0 9px rgba(0, 240, 255, 0.8);
}

.neon-toggle__track:focus-visible {
  outline: 2px solid #00f0ff;
  outline-offset: 3px;
}
</style>
