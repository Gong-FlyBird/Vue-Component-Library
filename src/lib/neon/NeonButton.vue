<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'cyan' | 'magenta' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: Variant
    size?: Size
  }>(),
  {
    label: 'INITIATE',
    variant: 'cyan',
    size: 'md',
  },
)

const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>()

const classes = computed(() => [
  'neon-button',
  `neon-button--${props.variant}`,
  `neon-button--${props.size}`,
])
</script>

<template>
  <button
    :class="classes"
    type="button"
    @click="(ev) => emit('click', ev)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.neon-button {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.72rem 1.7rem;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #00f0ff;
  background: rgba(0, 240, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.6);
  border-radius: 6px;
  box-shadow:
    0 0 12px rgba(0, 240, 255, 0.18),
    inset 0 0 12px rgba(0, 240, 255, 0.06);
  cursor: pointer;
  user-select: none;
  transition:
    background 250ms ease,
    box-shadow 250ms ease,
    color 250ms ease,
    transform 150ms ease;
}

.neon-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -130%;
  width: 55%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 0%,
    rgba(255, 255, 255, 0.22) 50%,
    transparent 100%
  );
  transform: skewX(-20deg);
  transition: left 500ms ease;
  pointer-events: none;
}

.neon-button:hover {
  background: rgba(0, 240, 255, 0.14);
  box-shadow:
    0 0 20px rgba(0, 240, 255, 0.55),
    0 0 48px rgba(0, 240, 255, 0.22),
    inset 0 0 16px rgba(0, 240, 255, 0.14);
  text-shadow: 0 0 9px rgba(0, 240, 255, 0.95);
}

.neon-button:hover::before {
  left: 140%;
}

.neon-button:active {
  transform: translateY(1px) scale(0.98);
}

.neon-button:focus-visible {
  outline: 2px solid #00f0ff;
  outline-offset: 3px;
}

.neon-button--magenta {
  color: #ff2ec4;
  background: rgba(255, 46, 196, 0.05);
  border-color: rgba(255, 46, 196, 0.6);
  box-shadow:
    0 0 12px rgba(255, 46, 196, 0.18),
    inset 0 0 12px rgba(255, 46, 196, 0.06);
}

.neon-button--magenta:hover {
  background: rgba(255, 46, 196, 0.14);
  box-shadow:
    0 0 20px rgba(255, 46, 196, 0.55),
    0 0 48px rgba(255, 46, 196, 0.22),
    inset 0 0 16px rgba(255, 46, 196, 0.14);
  text-shadow: 0 0 9px rgba(255, 46, 196, 0.95);
}

.neon-button--magenta:focus-visible {
  outline-color: #ff2ec4;
}

.neon-button--outline {
  color: #9be8ff;
  background: transparent;
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow: none;
}

.neon-button--outline:hover {
  color: #00f0ff;
  background: rgba(0, 240, 255, 0.08);
  border-color: rgba(0, 240, 255, 0.7);
  box-shadow:
    0 0 16px rgba(0, 240, 255, 0.4),
    inset 0 0 12px rgba(0, 240, 255, 0.1);
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.8);
}

.neon-button--sm {
  padding: 0.45rem 1.1rem;
  font-size: 0.64rem;
}

.neon-button--lg {
  padding: 0.95rem 2.3rem;
  font-size: 0.84rem;
}
</style>
