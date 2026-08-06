<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { TrendingUp } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  target?: number
  label?: string
  trend?: 'up' | 'down'
  suffix?: string
  dark?: boolean
}>(), {
  target: 100,
  label: 'Visitors',
  trend: 'up',
  suffix: '',
  dark: false,
})

const display = ref(0)
let timer: number | undefined
let frame: number | undefined

function animate() {
  const duration = 1200
  const start = performance.now()
  const from = 0
  const delta = props.target - from
  cancelAnimationFrame(frame as number)
  frame = requestAnimationFrame(function tick(now) {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    display.value = Math.round(from + delta * eased)
    if (t < 1) frame = requestAnimationFrame(tick)
  })
}

watch(() => props.target, () => animate())

onMounted(() => {
  timer = window.setTimeout(animate, 150)
})

onBeforeUnmount(() => {
  if (timer) window.clearTimeout(timer)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <div class="bento-stats" :class="{ 'bento-stats--dark': dark }">
    <p class="bento-stats__number">
      {{ display.toLocaleString() }}<span class="bento-stats__suffix">{{ suffix }}</span>
    </p>
    <div class="bento-stats__row">
      <p class="bento-stats__label">{{ label }}</p>
      <span
        class="bento-stats__trend"
        :class="trend === 'down' ? 'bento-stats__trend--down' : 'bento-stats__trend--up'"
      >
        <TrendingUp class="bento-stats__trend-icon" :size="14" stroke-width="2.5" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.bento-stats {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  min-width: 0;
  padding: 1.15rem;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid #e5e5ea;
  transition: transform 250ms ease, box-shadow 250ms ease;
}

.bento-stats:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.12);
}

.bento-stats--dark {
  background: #1d1d1f;
  border-color: #1d1d1f;
}

.bento-stats__number {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 800;
  font-size: 2.1rem;
  letter-spacing: -0.02em;
  color: #1d1d1f;
  font-variant-numeric: tabular-nums;
}

.bento-stats--dark .bento-stats__number {
  color: #f5f5f7;
}

.bento-stats__suffix {
  font-size: 1.1rem;
  font-weight: 600;
  color: #86868b;
}

.bento-stats__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.35rem;
}

.bento-stats__label {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #86868b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bento-stats--dark .bento-stats__label {
  color: #a1a1a6;
}

.bento-stats__trend {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  flex-shrink: 0;
}

.bento-stats__trend--up {
  background: rgba(52, 199, 89, 0.14);
  color: #34c759;
}

.bento-stats__trend--down {
  background: rgba(255, 59, 48, 0.12);
  color: #ff3b30;
}

.bento-stats__trend--down .bento-stats__trend-icon {
  transform: rotate(180deg);
}

.bento-stats__trend-icon {
  transition: transform 250ms ease;
}
</style>
