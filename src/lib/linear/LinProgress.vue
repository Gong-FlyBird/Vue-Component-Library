<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const target = 64
const value = ref(0)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= target) {
      window.clearInterval(timer)
      timer = undefined
      return
    }
    value.value = Math.min(target, value.value + 4)
  }, 90)
})

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearInterval(timer)
})

const pct = computed(() => Math.round(value.value))
</script>

<template>
  <div class="lin-progress">
    <div class="lin-progress__row">
      <span class="lin-progress__label">Deploy progress</span>
      <span class="lin-progress__pct">{{ pct }}%</span>
    </div>

    <div
      class="lin-progress__track"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="pct"
    >
      <div class="lin-progress__fill" :style="{ width: pct + '%' }">
        <span class="lin-progress__shine" aria-hidden="true"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lin-progress {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 100%;
}

.lin-progress__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.lin-progress__label {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.75rem;
  color: #9b9ea6;
}

.lin-progress__pct {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: #e6e8ee;
}

.lin-progress__track {
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.lin-progress__fill {
  position: relative;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #5e6ad2, #8b93e8);
  box-shadow: 0 0 10px rgba(94, 106, 210, 0.55);
  overflow: hidden;
  transition: width 300ms ease;
}

.lin-progress__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    transparent 30%,
    rgba(255, 255, 255, 0.55) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  animation: lin-progress-shine 1.9s ease-in-out infinite;
}

@keyframes lin-progress-shine {
  60%,
  100% {
    transform: translateX(100%);
  }
}
</style>
