<script setup lang="ts">
withDefaults(defineProps<{ level?: 1 | 2 | 3 }>(), { level: 1 })
</script>

<template>
  <div class="stage">
    <h2 class="text" :class="`text--l${level}`">
      <span class="text__word">Aurora</span>
      <span class="text__shimmer" aria-hidden="true"></span>
    </h2>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #0d0d14;
  padding: 3.4rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.text {
  position: relative;
  margin: 0;
  font-family: 'Didot', Georgia, serif;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-align: center;
  background: linear-gradient(100deg, #8b5cf6 0%, #ec4899 30%, #f59e0b 52%, #22d3ee 74%, #8b5cf6 100%);
  background-size: 220% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: grad-text-flow 9s ease-in-out infinite;
  filter: drop-shadow(0 0 22px rgba(139, 92, 246, 0.35));
}
.text--l1 {
  font-size: clamp(2.6rem, 8vw, 4.4rem);
}
.text--l2 {
  font-size: clamp(1.9rem, 6vw, 3rem);
}
.text--l3 {
  font-size: clamp(1.3rem, 4vw, 2rem);
}
.text__word {
  position: relative;
}
.text__shimmer {
  position: absolute;
  top: -12%;
  bottom: -12%;
  left: 0;
  width: 40%;
  background: linear-gradient(
    100deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  pointer-events: none;
  mix-blend-mode: overlay;
  animation: grad-text-shimmer 5.5s ease-in-out infinite;
}
@keyframes grad-text-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes grad-text-shimmer {
  0% {
    transform: translateX(-120%);
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  55%,
  100% {
    transform: translateX(360%);
    opacity: 0;
  }
}
</style>
