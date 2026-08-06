<script setup lang="ts">
</script>

<template>
  <div class="y2k-loader" role="status" aria-label="loading">
    <span class="y2k-loader__petal" v-for="i in 6" :key="i" :style="{ '--i': i }"></span>
    <span class="y2k-loader__core"></span>
  </div>
</template>

<style scoped>
.y2k-loader {
  position: relative;
  width: 7rem;
  height: 7rem;
  animation: y2k-loader-spin 3.2s linear infinite;
}

.y2k-loader__petal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3.4rem;
  height: 1.9rem;
  margin: -0.95rem 0 0 -1.7rem;
  border-radius: 999px;
  background: conic-gradient(from 180deg, #ffd1dc 0deg, #b28df8 130deg, #7fd8f7 240deg, #ffd1dc 360deg);
  opacity: 0.95;
  transform: rotate(calc(var(--i) * 60deg)) translateY(-1.9rem) rotate(calc(var(--i) * -60deg));
  animation: y2k-petal-pulse 1.6s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.12s);
}

.y2k-loader__core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.6rem;
  height: 1.6rem;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #ffffff, #ffd1dc 60%, #e8a8c8);
  box-shadow: 0 0 14px rgba(178, 141, 248, 0.6);
}

@keyframes y2k-loader-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes y2k-petal-pulse {
  0%, 100% { filter: saturate(0.85) brightness(0.98); }
  50% { filter: saturate(1.4) brightness(1.08); }
}
</style>
