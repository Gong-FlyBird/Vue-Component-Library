<script setup lang="ts">
import { ref } from 'vue'

const on = ref(false)

function toggle() {
  on.value = !on.value
}
</script>

<template>
  <div class="vapor-toggle">
    <button
      class="vapor-toggle__track"
      :class="{ 'vapor-toggle__track--on': on }"
      type="button"
      role="switch"
      :aria-checked="on"
      aria-label="retro switch"
      @click="toggle"
    >
      <span class="vapor-toggle__knob"></span>
    </button>

    <span class="vapor-toggle__label" :class="{ 'vapor-toggle__label--on': on }">
      {{ on ? 'FEEL IT' : 'NOSTALGIA' }}
    </span>
  </div>
</template>

<style scoped>
.vapor-toggle {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.vapor-toggle__track {
  position: relative;
  width: 58px;
  height: 30px;
  padding: 0;
  background: linear-gradient(90deg, #ff71ce, #b967ff);
  border: none;
  border-radius: 999px;
  opacity: 0.4;
  cursor: pointer;
  transition:
    opacity 250ms ease,
    box-shadow 250ms ease;
}

.vapor-toggle__track--on {
  opacity: 1;
  box-shadow:
    0 0 16px rgba(255, 113, 206, 0.6),
    0 0 32px rgba(185, 103, 255, 0.3);
}

.vapor-toggle__knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: radial-gradient(
    circle at 30% 28%,
    #ffffff 0%,
    #ffd9f2 55%,
    #f2b6e0 100%
  );
  box-shadow:
    0 3px 8px rgba(22, 10, 51, 0.5),
    inset 0 1px 2px rgba(255, 255, 255, 0.95);
  transition: transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.vapor-toggle__track--on .vapor-toggle__knob {
  transform: translateX(28px);
}

.vapor-toggle__label {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.26em;
  color: rgba(255, 113, 206, 0.55);
  transition:
    color 250ms ease,
    text-shadow 250ms ease;
}

.vapor-toggle__label--on {
  color: #fffb96;
  text-shadow: 0 0 9px rgba(255, 251, 150, 0.7);
}

.vapor-toggle__track:focus-visible {
  outline: 2px solid #01cdfe;
  outline-offset: 3px;
}
</style>
