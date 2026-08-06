<script setup lang="ts">
import { computed } from 'vue'

type Hue = 'pink' | 'cyan' | 'purple'

const props = withDefaults(
  defineProps<{
    label?: string
    hue?: Hue
  }>(),
  {
    label: 'PRESS START',
    hue: 'pink',
  },
)

const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>()

const hueColor: Record<Hue, string> = {
  pink: '#ff71ce',
  cyan: '#01cdfe',
  purple: '#b967ff',
}

const hueVar = computed(() => ({ '--hue': hueColor[props.hue] }))
</script>

<template>
  <button
    class="vapor-button"
    type="button"
    :style="hueVar"
    @click="(ev) => emit('click', ev)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.vapor-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.72rem 1.9rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--hue);
  background: rgba(255, 113, 206, 0.05);
  border: 2px solid var(--hue);
  border-radius: 4px;
  text-shadow: 0 0 10px var(--hue);
  filter: drop-shadow(0 0 8px var(--hue));
  cursor: pointer;
  user-select: none;
  transition:
    transform 150ms ease,
    box-shadow 200ms ease,
    background 200ms ease;
}

.vapor-button:hover {
  color: transparent;
  background-image: linear-gradient(
    90deg,
    #ff71ce,
    #01cdfe,
    #b967ff,
    #fffb96,
    #ff71ce
  );
  background-size: 220% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  border-color: rgba(255, 255, 255, 0.9);
  text-shadow: none;
  transform: translateY(-2px);
  animation: vapor-button-chrome 2s linear infinite;
}

@keyframes vapor-button-chrome {
  to {
    background-position: 220% 0;
  }
}

.vapor-button:active {
  transform: translateY(0) scale(0.97);
}

.vapor-button:focus-visible {
  outline: 2px solid var(--hue);
  outline-offset: 3px;
}
</style>
