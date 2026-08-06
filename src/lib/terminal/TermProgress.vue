<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const WIDTH = 20

const pct = ref(0)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    if (pct.value >= 100) {
      window.clearInterval(timer)
      timer = undefined
      return
    }
    pct.value = Math.min(100, pct.value + Math.ceil(Math.random() * 9))
  }, 110)
})

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearInterval(timer)
})

const bar = computed(() => {
  const filled = Math.round((pct.value / 100) * WIDTH)
  return '[' + '='.repeat(filled) + '>' + ' '.repeat(Math.max(0, WIDTH - filled)) + ']'
})

const pctLabel = computed(() => `${Math.round(pct.value)}%`)
</script>

<template>
  <div class="term-progress">
    <div class="term-progress__row">
      <span class="term-progress__label">decompressing archive</span>
      <span class="term-progress__pct">{{ pctLabel }}</span>
    </div>

    <pre class="term-progress__bar" aria-hidden="true">{{ bar }}</pre>
  </div>
</template>

<style scoped>
.term-progress {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  max-width: 100%;
}

.term-progress__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.term-progress__label {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5c6770;
}

.term-progress__pct {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.78rem;
  font-weight: 600;
  color: #ffb454;
  text-shadow: 0 0 8px rgba(255, 180, 84, 0.6);
}

.term-progress__bar {
  margin: 0;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.82rem;
  line-height: 1.4;
  white-space: pre;
  color: #33ff66;
  text-shadow: 0 0 7px rgba(51, 255, 102, 0.65);
}

.term-progress__bar::after {
  content: '▊';
  animation: term-progress-blink 1s steps(2, start) infinite;
}

@keyframes term-progress-blink {
  to {
    opacity: 0;
  }
}
</style>
