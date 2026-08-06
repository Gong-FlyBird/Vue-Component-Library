<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)

function toggle() {
  on.value = !on.value
}
</script>

<template>
  <div class="y2k-toggle">
    <span class="y2k-toggle__label">{{ on ? 'glam on' : 'glam off' }}</span>
    <button
      class="y2k-toggle__track"
      :class="{ 'y2k-toggle__track--on': on }"
      type="button"
      role="switch"
      :aria-checked="on"
      aria-label="glam switch"
      @click="toggle"
    >
      <span class="y2k-toggle__knob">
        <span class="y2k-toggle__dot" aria-hidden="true"></span>
      </span>
    </button>
  </div>
</template>

<style scoped>
.y2k-toggle {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.y2k-toggle__label {
  font-family: 'Verdana', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6f5b9e;
}

.y2k-toggle__track {
  position: relative;
  width: 4.6rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: linear-gradient(180deg, #d9d9e6, #c4c4d6);
  box-shadow:
    inset 0 4px 8px rgba(31, 31, 46, 0.28),
    inset 0 -2px 4px rgba(255, 255, 255, 0.8),
    0 3px 8px rgba(178, 141, 248, 0.35);
  cursor: pointer;
  transition: background 250ms ease;
}

.y2k-toggle__track--on {
  background: linear-gradient(135deg, #ff9fb4 0%, #b28df8 55%, #7fd8f7 100%);
  box-shadow:
    inset 0 4px 8px rgba(31, 31, 46, 0.22),
    inset 0 -2px 4px rgba(255, 255, 255, 0.55),
    0 3px 10px rgba(178, 141, 248, 0.6);
}

.y2k-toggle__knob {
  position: absolute;
  top: 0.22rem;
  left: 0.25rem;
  width: 2.05rem;
  height: 2.05rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #ffffff 0%, #eaeaf4 60%, #d4d4e4 100%);
  box-shadow:
    0 4px 8px rgba(31, 31, 46, 0.3),
    inset 0 2px 3px rgba(255, 255, 255, 0.95);
  transition: transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.y2k-toggle__dot {
  position: absolute;
  top: 0.35rem;
  left: 50%;
  width: 0.55rem;
  height: 0.55rem;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle at 40% 35%, #ffffff, #c9c9d8);
  box-shadow: 0 1px 2px rgba(31, 31, 46, 0.3);
}

.y2k-toggle__track--on .y2k-toggle__knob {
  transform: translateX(2.05rem);
}

.y2k-toggle__track:active .y2k-toggle__knob {
  box-shadow:
    inset 0 3px 6px rgba(31, 31, 46, 0.25),
    0 2px 4px rgba(31, 31, 46, 0.25);
}

.y2k-toggle__track:focus-visible {
  outline: 3px solid #b28df8;
  outline-offset: 3px;
}
</style>
