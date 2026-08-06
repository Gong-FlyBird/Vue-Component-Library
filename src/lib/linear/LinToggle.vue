<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)

function toggle() {
  on.value = !on.value
}
</script>

<template>
  <div class="lin-toggle">
    <button
      class="lin-toggle__track"
      :class="{ 'lin-toggle__track--on': on }"
      type="button"
      role="switch"
      :aria-checked="on"
      aria-label="toggle"
      @click="toggle"
    >
      <span class="lin-toggle__knob"></span>
    </button>

    <span class="lin-toggle__label">{{ on ? 'Enabled' : 'Disabled' }}</span>
  </div>
</template>

<style scoped>
.lin-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lin-toggle__track {
  position: relative;
  width: 42px;
  height: 24px;
  padding: 0;
  background: #2b2c31;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: background 150ms ease;
}

.lin-toggle__track--on {
  background: #5e6ad2;
}

.lin-toggle__knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transition: transform 150ms ease;
}

.lin-toggle__track--on .lin-toggle__knob {
  transform: translateX(18px);
}

.lin-toggle__label {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.78rem;
  color: #9b9ea6;
}

.lin-toggle__track:focus-visible {
  outline: 2px solid #5e6ad2;
  outline-offset: 2px;
}
</style>
