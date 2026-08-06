<script setup lang="ts">
import { Star } from 'lucide-vue-next'
</script>

<template>
  <div class="vapor-loader">
    <div class="vapor-loader__dial" aria-hidden="true">
      <span class="vapor-loader__ring"></span>
      <span class="vapor-loader__core">
        <Star :size="20" stroke-width="1.5" />
      </span>
    </div>

    <span class="vapor-loader__label">loading… stay cool</span>
  </div>
</template>

<style scoped>
.vapor-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  max-width: 100%;
}

.vapor-loader__dial {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
}

.vapor-loader__ring {
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #ff71ce,
    #01cdfe,
    #b967ff,
    #fffb96,
    #ff71ce
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 6px),
    #000 calc(100% - 5px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 6px),
    #000 calc(100% - 5px)
  );
  filter: drop-shadow(0 0 6px rgba(255, 113, 206, 0.75));
  animation: vapor-loader-spin 1.1s linear infinite;
}

@keyframes vapor-loader-spin {
  to {
    transform: rotate(360deg);
  }
}

.vapor-loader__core {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffb96;
  filter: drop-shadow(0 0 8px rgba(255, 251, 150, 0.8));
  animation: vapor-loader-pulse 1.4s ease-in-out infinite;
}

@keyframes vapor-loader-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.82);
  }
}

.vapor-loader__label {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.64rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #ff71ce;
  text-shadow: 0 0 9px rgba(255, 113, 206, 0.65);
}
</style>
