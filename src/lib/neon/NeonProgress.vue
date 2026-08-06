<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const target = 72
const value = ref(0)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= target) {
      window.clearInterval(timer)
      timer = undefined
      return
    }
    value.value = Math.min(target, value.value + Math.ceil(Math.random() * 8))
  }, 90)
})

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearInterval(timer)
})

const pct = computed(() => Math.round(value.value))
</script>

<template>
  <div class="neon-progress">
    <div class="neon-progress__row">
      <span class="neon-progress__label">uplink.sync</span>
      <span class="neon-progress__pct">{{ pct }}%</span>
    </div>

    <div
      class="neon-progress__track"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="pct"
    >
      <div class="neon-progress__fill" :style="{ width: pct + '%' }">
        <span class="neon-progress__shimmer" aria-hidden="true"></span>
      </div>
    </div>

    <span class="neon-progress__ticks" aria-hidden="true">
      ▍▍▍▍▍▍▍▍▍▍▍▍▍▍▍▍▍▍▍▍
    </span>
  </div>
</template>

<style scoped>
.neon-progress {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 100%;
}

.neon-progress__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.neon-progress__label {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #6a5bff;
  text-shadow: 0 0 8px rgba(106, 91, 255, 0.55);
}

.neon-progress__pct {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: #00f0ff;
  text-shadow: 0 0 9px rgba(0, 240, 255, 0.8);
}

.neon-progress__track {
  position: relative;
  height: 10px;
  background: rgba(0, 240, 255, 0.07);
  border: 1px solid rgba(0, 240, 255, 0.18);
  border-radius: 3px;
  overflow: hidden;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
}

.neon-progress__fill {
  position: relative;
  height: 100%;
  background: linear-gradient(90deg, #6a5bff, #00f0ff);
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.65);
  transition: width 300ms ease;
}

.neon-progress__shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 20%,
    rgba(255, 255, 255, 0.35) 45%,
    transparent 65%
  );
  animation: neon-shimmer 1.8s linear infinite;
}

@keyframes neon-shimmer {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.neon-progress__ticks {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  line-height: 1;
  color: rgba(0, 240, 255, 0.18);
  user-select: none;
}
</style>
