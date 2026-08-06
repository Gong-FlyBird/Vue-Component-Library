<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: 'Shifting…' })
</script>

<template>
  <div class="stage">
    <div class="loader">
      <span class="loader__blob" aria-hidden="true"></span>
      <span class="loader__label">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #0d0d14;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
}
.loader__blob {
  width: 92px;
  height: 92px;
  background: linear-gradient(135deg, #6d28d9 0%, #db2777 38%, #f59e0b 66%, #06b6d4 100%);
  background-size: 240% 240%;
  background-position: 0% 0%;
  animation:
    grad-blob-shape 7s ease-in-out infinite,
    grad-blob-fill 6s ease-in-out infinite;
  box-shadow:
    0 0 24px rgba(124, 58, 237, 0.5),
    0 0 58px rgba(219, 39, 119, 0.28),
    inset 0 1px 2px rgba(255, 255, 255, 0.35),
    inset -2px -3px 8px rgba(0, 0, 0, 0.35);
}
.loader__label {
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
}
@keyframes grad-blob-shape {
  0% {
    border-radius: 58% 42% 55% 45% / 52% 58% 42% 48%;
    transform: rotate(0deg) scale(1);
  }
  25% {
    border-radius: 42% 58% 48% 52% / 58% 44% 56% 42%;
    transform: rotate(18deg) scale(1.06);
  }
  50% {
    border-radius: 62% 38% 40% 60% / 44% 62% 38% 56%;
    transform: rotate(36deg) scale(0.96);
  }
  75% {
    border-radius: 44% 56% 60% 40% / 62% 40% 60% 38%;
    transform: rotate(54deg) scale(1.05);
  }
  100% {
    border-radius: 58% 42% 55% 45% / 52% 58% 42% 48%;
    transform: rotate(72deg) scale(1);
  }
}
@keyframes grad-blob-fill {
  0%,
  100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
}
</style>
