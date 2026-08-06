<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'solid' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: Variant
    size?: Size
  }>(),
  {
    label: 'Discover',
    variant: 'solid',
    size: 'md',
  },
)

const emit = defineEmits<{ (e: 'click', value: MouseEvent): void }>()

const classes = computed(() => [
  'hermes-btn',
  `hermes-btn--${props.variant}`,
  `hermes-btn--${props.size}`,
])
</script>

<template>
  <button type="button" :class="classes" @click="(ev) => emit('click', ev)">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.hermes-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 999px;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-variant: small-caps;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  cursor: pointer;
  user-select: none;
  transition:
    transform 200ms ease,
    box-shadow 250ms ease,
    background 250ms ease;
}

.hermes-btn::before {
  content: '';
  position: absolute;
  inset: 5px;
  border: 1px dashed rgba(246, 239, 223, 0.38);
  border-radius: 999px;
  pointer-events: none;
}

.hermes-btn::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -70%;
  width: 45%;
  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: skewX(-20deg);
  pointer-events: none;
  transition: left 550ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hermes-btn:hover::after {
  left: 130%;
}

.hermes-btn--solid {
  color: #f3e8d4;
  background: linear-gradient(180deg, #7d5a3c 0%, #5f4129 55%, #513820 100%);
  border: 1px solid rgba(38, 22, 10, 0.6);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -8px 14px rgba(0, 0, 0, 0.28),
    0 8px 18px rgba(74, 47, 22, 0.4);
}

.hermes-btn--solid:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -8px 14px rgba(0, 0, 0, 0.24),
    0 14px 26px rgba(74, 47, 22, 0.5);
}

.hermes-btn--outline {
  color: #b9924f;
  background: transparent;
  border: 1px solid #b9924f;
}

.hermes-btn--outline::before {
  border-color: rgba(185, 146, 79, 0.5);
}

.hermes-btn--outline::after {
  background: linear-gradient(105deg, transparent, rgba(217, 111, 29, 0.28), transparent);
}

.hermes-btn--outline:hover {
  background: rgba(185, 146, 79, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(111, 78, 51, 0.3);
}

.hermes-btn:active {
  transform: translateY(0) scale(0.97);
}

.hermes-btn:focus-visible {
  outline: 2px solid #d96f1d;
  outline-offset: 3px;
}

.hermes-btn--sm {
  padding: 0.4rem 1.2rem;
  font-size: 0.7rem;
}

.hermes-btn--md {
  padding: 0.6rem 1.8rem;
  font-size: 0.74rem;
}

.hermes-btn--lg {
  padding: 0.8rem 2.3rem;
  font-size: 0.82rem;
}
</style>
