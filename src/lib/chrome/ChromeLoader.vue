<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: 'Polishing…' })
</script>

<template>
  <div class="stage">
    <div class="loader">
      <div class="loader__ball" aria-hidden="true">
        <span class="loader__sphere"></span>
        <span class="loader__sheen"></span>
        <span class="loader__glare"></span>
      </div>
      <span class="loader__label">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #c7ccd6;
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
.loader__ball {
  position: relative;
  width: 84px;
  height: 84px;
}
.loader__sphere {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(circle at 68% 74%, rgba(35, 43, 55, 0.55) 0%, rgba(35, 43, 55, 0) 34%),
    linear-gradient(135deg, #f6f8fb 0%, #d3d9e2 34%, #9aa4b2 60%, #c2cad5 78%, #e8ecf2 100%);
  box-shadow:
    inset 0 0 6px rgba(255, 255, 255, 0.8),
    inset -3px -5px 10px rgba(35, 43, 55, 0.35),
    0 10px 22px rgba(35, 43, 55, 0.4),
    0 3px 6px rgba(35, 43, 55, 0.3);
}
.loader__sheen {
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    rgba(255, 255, 255, 0.95) 22deg,
    rgba(255, 255, 255, 0.15) 42deg,
    transparent 75deg,
    transparent 360deg
  );
  -webkit-mask: radial-gradient(closest-side, transparent 96%, #000 97%);
  mask: radial-gradient(closest-side, transparent 96%, #000 97%);
  animation: chrome-orb 1.6s linear infinite;
}
.loader__glare {
  position: absolute;
  top: 12%;
  left: 16%;
  width: 22%;
  height: 11%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  filter: blur(2px);
  transform: rotate(-24deg);
  animation: chrome-gleam 2.4s ease-in-out infinite;
}
.loader__label {
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #3c4656;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}
@keyframes chrome-orb {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes chrome-gleam {
  0%,
  100% {
    opacity: 0.45;
    transform: translateX(0) rotate(-24deg);
  }
  50% {
    opacity: 1;
    transform: translateX(6px) rotate(-20deg);
  }
}
</style>
