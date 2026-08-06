<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Exclusive',
  },
)
</script>

<template>
  <span class="hermes-badge">{{ props.label }}</span>
</template>

<style scoped>
.hermes-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0.38rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(84, 60, 22, 0.7);
  background: linear-gradient(135deg, #e3c689 0%, #b9924f 48%, #8f6c33 100%);
  color: #2b1d0e;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-variant: small-caps;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.7rem;
  font-weight: 600;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -3px 6px rgba(0, 0, 0, 0.18),
    0 5px 12px rgba(111, 78, 51, 0.35);
}

.hermes-badge::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -70%;
  width: 40%;
  background: linear-gradient(105deg, transparent, rgba(255, 255, 255, 0.65), transparent);
  transform: skewX(-18deg);
  animation: hermes-badge-shine 3.2s ease-in-out infinite;
}

@keyframes hermes-badge-shine {
  0% {
    left: -70%;
  }
  60%,
  100% {
    left: 140%;
  }
}
</style>
