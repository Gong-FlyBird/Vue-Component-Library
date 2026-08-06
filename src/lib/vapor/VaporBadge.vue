<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'New Wave',
  },
)
</script>

<template>
  <div class="vapor-badge">
    <span class="vapor-badge__text">{{ label }}</span>
  </div>
</template>

<style scoped>
.vapor-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 0.5rem 1.1rem;
  background: rgba(255, 113, 206, 0.07);
  border: 1px solid rgba(255, 113, 206, 0.55);
  border-radius: 999px;
  box-shadow:
    0 0 16px rgba(255, 113, 206, 0.22),
    inset 0 0 10px rgba(255, 113, 206, 0.06);
  transition:
    border-color 250ms ease,
    box-shadow 250ms ease;
}

.vapor-badge::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    rgba(255, 113, 206, 0),
    rgba(1, 205, 254, 0.5),
    rgba(185, 103, 255, 0),
    rgba(255, 113, 206, 0)
  );
  filter: blur(6px);
  opacity: 0.45;
  pointer-events: none;
}

.vapor-badge:hover {
  border-color: rgba(1, 205, 254, 0.7);
  box-shadow:
    0 0 22px rgba(1, 205, 254, 0.3),
    inset 0 0 12px rgba(1, 205, 254, 0.08);
}

.vapor-badge__text {
  position: relative;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff71ce, #01cdfe, #b967ff);
  background-size: 160% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 6px rgba(1, 205, 254, 0.45));
  animation: vapor-badge-chrome 3s ease-in-out infinite alternate;
}

@keyframes vapor-badge-chrome {
  from {
    background-position: 0% 0;
  }
  to {
    background-position: 100% 0;
  }
}
</style>
