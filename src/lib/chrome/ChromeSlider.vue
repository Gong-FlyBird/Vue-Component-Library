<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const track = ref<HTMLDivElement | null>(null)
const dragging = ref(false)
const percent = ref(46)

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
  left: `calc(${percent.value}% - 1.05rem)`,
}))

const fillStyle = computed(() => ({
  width: `${percent.value}%`,
}))
</script>

<template>
  <div class="stage">
    <div class="slider">
      <div class="slider__row">
        <span class="slider__label">Brightness</span>
        <span class="slider__value">{{ percent }}%</span>
      </div>
      <div
        ref="track"
        class="slider__track"
        :class="{ 'slider__track--active': dragging }"
        role="slider"
        tabindex="0"
        aria-label="brightness"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="percent"
        @pointerdown="onPointerDown"
        @keydown="onKeydown"
      >
        <span class="slider__trackbase"></span>
        <span class="slider__fill" :style="fillStyle"></span>
        <span class="slider__ticks" aria-hidden="true">
          <span class="slider__tick" v-for="t in 9" :key="t"></span>
        </span>
        <span class="slider__knob" :style="knobStyle">
          <span class="slider__knobcap"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #c7ccd6;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.slider {
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.slider__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.slider__label {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3c4656;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.65);
}
.slider__value {
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: #313b4a;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}
.slider__track {
  position: relative;
  height: 2.1rem;
  border-radius: 999px;
  cursor: pointer;
  touch-action: none;
  outline: none;
}
.slider__trackbase {
  position: absolute;
  inset: 0.6rem 0;
  border-radius: 999px;
  border: 2px solid #8d97a5;
  background:
    repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.07) 0 1px,
      rgba(30, 38, 50, 0.08) 1px 2px
    ),
    linear-gradient(180deg, #aeb7c4 0%, #c4cbd6 50%, #9aa4b2 100%);
  box-shadow:
    inset 0 2px 4px rgba(30, 38, 50, 0.4),
    inset 0 -1px 1px rgba(255, 255, 255, 0.65),
    0 1px 1px rgba(255, 255, 255, 0.5);
}
.slider__fill {
  position: absolute;
  top: 0.6rem;
  bottom: 0.6rem;
  left: 0;
  border-radius: 999px;
  border: 2px solid #8d97a5;
  border-right: none;
  box-sizing: border-box;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 38%),
    linear-gradient(180deg, #e9edf3 0%, #c9d0da 50%, #a9b2c0 100%);
  box-shadow:
    inset 0 2px 3px rgba(30, 38, 50, 0.28),
    inset 0 -1px 2px rgba(255, 255, 255, 0.7),
    0 1px 1px rgba(255, 255, 255, 0.4);
}
.slider__ticks {
  position: absolute;
  inset: 0.6rem 1.05rem;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}
.slider__tick {
  width: 1px;
  background: rgba(30, 38, 50, 0.45);
  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.5);
}
.slider__knob {
  position: absolute;
  top: 50%;
  width: 2.1rem;
  height: 2.1rem;
  transform: translateY(-50%);
  border-radius: 50%;
  border: 2px solid #8d97a5;
  box-sizing: border-box;
  background:
    radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 30%),
    linear-gradient(135deg, #f4f7fa 0%, #cdd4de 45%, #98a2b0 62%, #c6cdd8 100%);
  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.9),
    inset -2px -3px 6px rgba(30, 38, 50, 0.35),
    0 2px 5px rgba(30, 38, 50, 0.35),
    0 7px 14px rgba(30, 38, 50, 0.22);
  transition: box-shadow 150ms ease, transform 150ms ease;
}
.slider__knobcap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #f7f9fc 0%, #a9b2c0 100%);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -1px 2px rgba(30, 38, 50, 0.4),
    0 1px 1px rgba(30, 38, 50, 0.3);
}
.slider__track--active .slider__knob {
  transform: translateY(-50%) scale(0.96);
  box-shadow:
    inset 0 3px 7px rgba(30, 38, 50, 0.45),
    inset 0 -1px 2px rgba(255, 255, 255, 0.5),
    0 1px 2px rgba(30, 38, 50, 0.3);
}
.slider__track:focus-visible .slider__knob {
  outline: 2px solid #5d687a;
  outline-offset: 3px;
}
</style>
