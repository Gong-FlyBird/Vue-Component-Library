<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: Variant
    size?: Size
  }>(),
  {
    label: 'Continue',
    variant: 'primary',
    size: 'md',
  },
)

const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>()

const classes = computed(() => [
  'glass-btn',
  `glass-btn--${props.variant}`,
  `glass-btn--${props.size}`,
])
</script>

<template>
  <button type="button" :class="classes" @click="(ev) => emit('click', ev)">
    <span v-if="$slots.icon" class="glass-btn__icon">
      <slot name="icon" />
    </span>
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.glass-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  backdrop-filter: blur(14px) saturate(1.5);
  -webkit-backdrop-filter: blur(14px) saturate(1.5);
  transition:
    background 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;
}

.glass-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 12%;
  right: 12%;
  height: 48%;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.32), transparent);
  pointer-events: none;
}

.glass-btn__icon {
  display: inline-flex;
  align-items: center;
}

.glass-btn__icon :deep(svg) {
  width: 1em;
  height: 1em;
}

.glass-btn:hover {
  transform: scale(1.03);
}

.glass-btn:active {
  transform: scale(0.96);
}

.glass-btn:focus-visible {
  outline: 2px solid #7db4ff;
  outline-offset: 3px;
}

.glass-btn--primary {
  color: #eaf1ff;
  background: linear-gradient(180deg, rgba(118, 158, 255, 0.4), rgba(66, 104, 224, 0.28));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -10px 16px rgba(12, 24, 76, 0.25),
    0 12px 28px rgba(2, 8, 32, 0.5);
}

.glass-btn--primary:hover {
  background: linear-gradient(180deg, rgba(130, 168, 255, 0.5), rgba(78, 116, 235, 0.36));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -10px 16px rgba(12, 24, 76, 0.2),
    0 16px 36px rgba(52, 90, 220, 0.45);
}

.glass-btn--ghost {
  color: rgba(235, 241, 255, 0.85);
  background: rgba(255, 255, 255, 0.07);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 8px 20px rgba(2, 8, 32, 0.35);
}

.glass-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.13);
}

.glass-btn--sm {
  padding: 0.42rem 1.05rem;
  font-size: 0.78rem;
}

.glass-btn--md {
  padding: 0.6rem 1.5rem;
  font-size: 0.85rem;
}

.glass-btn--lg {
  padding: 0.8rem 2rem;
  font-size: 0.95rem;
}
</style>
