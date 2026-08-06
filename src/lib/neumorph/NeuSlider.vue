<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const track = ref<HTMLDivElement | null>(null)
const dragging = ref(false)
const percent = ref(40)

function clamp(v: number) {
  return Math.min(100, Math.max(0, v))
}

function updateFromClientX(clientX: number) {
  const el = track.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const ratio = (clientX - rect.left) / rect.width
  percent.value = clamp(Math.round(ratio * 100))
}

function onPointerDown(ev: PointerEvent) {
  dragging.value = true
  const el = ev.currentTarget as HTMLDivElement | null
  el?.setPointerCapture?.(ev.pointerId)
  updateFromClientX(ev.clientX)
}

function onPointerMove(ev: PointerEvent) {
  if (!dragging.value) return
  updateFromClientX(ev.clientX)
}

function onPointerUp(ev: PointerEvent) {
  dragging.value = false
  const el = ev.currentTarget as HTMLDivElement | null
  el?.releasePointerCapture?.(ev.pointerId)
}

function onKeydown(ev: KeyboardEvent) {
  if (ev.key === 'ArrowLeft') percent.value = clamp(percent.value - 5)
  if (ev.key === 'ArrowRight') percent.value = clamp(percent.value + 5)
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
})

const knobStyle = computed(() => ({
  left: `calc(${percent.value}% - 1rem)`,
}))

const trackStyle = computed(() => ({
  width: `${percent.value}%`,
}))
</script>

<template>
  <div class="neu-slider">
    <div
      ref="track"
      class="neu-slider__track"
      :class="{ 'neu-slider__track--active': dragging }"
      role="slider"
      tabindex="0"
      aria-label="volume"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="percent"
      @pointerdown="onPointerDown"
      @keydown="onKeydown"
    >
      <span class="neu-slider__fill" :style="trackStyle"></span>
      <span class="neu-slider__knob" :style="knobStyle"></span>
    </div>
    <span class="neu-slider__value">{{ percent }}%</span>
  </div>
</template>

<style scoped>
.neu-slider {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.neu-slider__track {
  position: relative;
  flex: 1;
  height: 1.1rem;
  border-radius: 999px;
  background: #d6dbe4;
  cursor: pointer;
  touch-action: none;
  box-shadow:
    inset 4px 4px 8px #a3b1c6,
    inset -4px -4px 8px #ffffff;
}

.neu-slider__fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #b7c7e8, #8fa8d4);
  box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.5);
}

.neu-slider__knob {
  position: absolute;
  top: 50%;
  width: 2rem;
  height: 2rem;
  transform: translateY(-50%);
  background: #e0e5ec;
  border-radius: 999px;
  box-shadow:
    4px 4px 8px #a3b1c6,
    -4px -4px 8px #ffffff,
    inset 1px 1px 2px rgba(255, 255, 255, 0.9);
  transition: box-shadow 150ms ease;
}

.neu-slider__track--active .neu-slider__knob {
  box-shadow:
    inset 3px 3px 6px #a3b1c6,
    inset -3px -3px 6px #ffffff;
}

.neu-slider__value {
  flex-shrink: 0;
  min-width: 2.8rem;
  font-family: 'SF Mono', Consolas, monospace;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: right;
  color: #43557a;
}

.neu-slider__track:focus-visible {
  outline: 2px solid #a3b1c6;
  outline-offset: 3px;
}
</style>
