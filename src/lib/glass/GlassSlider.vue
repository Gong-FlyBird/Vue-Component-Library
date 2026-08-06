<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Volume2 } from 'lucide-vue-next'

const track = ref<HTMLDivElement | null>(null)
const dragging = ref(false)
const percent = ref(55)

function clamp(v: number) {
  return Math.min(100, Math.max(0, v))
}

function updateFromClientX(clientX: number) {
  const el = track.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  percent.value = clamp(Math.round(((clientX - rect.left) / rect.width) * 100))
}

function onPointerDown(ev: PointerEvent) {
  dragging.value = true
  ;(ev.currentTarget as HTMLElement | null)?.setPointerCapture?.(ev.pointerId)
  updateFromClientX(ev.clientX)
}

function onPointerMove(ev: PointerEvent) {
  if (!dragging.value) return
  updateFromClientX(ev.clientX)
}

function onPointerUp(ev: PointerEvent) {
  dragging.value = false
  ;(ev.currentTarget as HTMLElement | null)?.releasePointerCapture?.(ev.pointerId)
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

const fillStyle = computed(() => ({ width: `${percent.value}%` }))
const knobStyle = computed(() => ({ left: `calc(${percent.value}% - 0.75rem)` }))
</script>

<template>
  <div class="glass-slider">
    <Volume2 class="glass-slider__icon" />
    <div
      ref="track"
      class="glass-slider__track"
      :class="{ 'glass-slider__track--dragging': dragging }"
      role="slider"
      tabindex="0"
      aria-label="volume"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="percent"
      @pointerdown="onPointerDown"
      @keydown="onKeydown"
    >
      <span class="glass-slider__fill" :style="fillStyle"></span>
      <span class="glass-slider__knob" :style="knobStyle"></span>
    </div>
    <span class="glass-slider__badge">{{ percent }}%</span>
  </div>
</template>

<style scoped>
.glass-slider {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: 100%;
}

.glass-slider__icon {
  flex-shrink: 0;
  width: 1.15rem;
  height: 1.15rem;
  color: rgba(234, 241, 255, 0.75);
}

.glass-slider__track {
  position: relative;
  flex: 1;
  min-width: 0;
  height: 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 3px rgba(2, 8, 32, 0.55),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);
  cursor: pointer;
  touch-action: none;
}

.glass-slider__fill {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #6fb3ff, #7f7bff, #b06cff);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 0 12px rgba(125, 150, 255, 0.7);
}

.glass-slider__knob {
  position: absolute;
  top: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #ffffff, #cfd9f5);
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow:
    0 2px 6px rgba(2, 8, 32, 0.5),
    0 0 12px rgba(140, 170, 255, 0.55);
  transform: translateY(-50%);
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.glass-slider__track--dragging .glass-slider__knob {
  transform: translateY(-50%) scale(1.18);
  box-shadow:
    0 2px 8px rgba(2, 8, 32, 0.55),
    0 0 18px rgba(150, 180, 255, 0.85);
}

.glass-slider__badge {
  flex-shrink: 0;
  min-width: 3.2rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #eaf1ff;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  text-align: center;
}

.glass-slider__track:focus-visible {
  outline: 2px solid #7db4ff;
  outline-offset: 3px;
}
</style>
