<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'System Online',
  },
)
</script>

<template>
  <div class="neon-badge">
    <span class="neon-badge__dot" aria-hidden="true"></span>
    <span class="neon-badge__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.neon-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  max-width: 100%;
  padding: 0.55rem 1.05rem;
  background: rgba(0, 240, 255, 0.06);
  border: 1px solid rgba(0, 240, 255, 0.32);
  border-radius: 999px;
  box-shadow:
    0 0 16px rgba(0, 240, 255, 0.12),
    inset 0 0 10px rgba(0, 240, 255, 0.05);
}

.neon-badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00f0ff;
  box-shadow:
    0 0 8px #00f0ff,
    0 0 18px rgba(0, 240, 255, 0.7);
  animation: neon-badge-pulse 1.6s ease-in-out infinite;
}

@keyframes neon-badge-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.55);
    opacity: 0.4;
  }
}

.neon-badge__label {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #b9f6ff;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.65);
}
</style>
