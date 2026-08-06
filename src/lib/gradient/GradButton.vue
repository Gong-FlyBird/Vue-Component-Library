<script setup lang="ts">
withDefaults(
  defineProps<{ variant?: 'solid' | 'ghost'; size?: 'sm' | 'md' | 'lg' }>(),
  { variant: 'solid', size: 'md' }
)
</script>

<template>
  <div class="stage">
    <button type="button" class="btn" :class="[`btn--${variant}`, `btn--${size}`]">
      <span class="btn__label"><slot>Aurora</slot></span>
    </button>
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
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  background: linear-gradient(120deg, #6d28d9, #db2777, #f59e0b, #06b6d4, #6d28d9);
  background-size: 200% 100%;
  background-position: 0% 50%;
  color: #fff;
  animation: grad-btn-flow 5s ease-in-out infinite;
  transition: transform 200ms ease, box-shadow 250ms ease, filter 200ms ease;
  will-change: background-position;
}
.btn--solid {
  box-shadow:
    0 0 18px rgba(124, 58, 237, 0.35),
    0 0 42px rgba(219, 39, 119, 0.22),
    0 8px 22px rgba(0, 0, 0, 0.45);
}
.btn--sm {
  padding: 0.5rem 1.4rem;
  font-size: 11px;
}
.btn--md {
  padding: 0.8rem 2.2rem;
  font-size: 13px;
}
.btn--lg {
  padding: 1.05rem 2.9rem;
  font-size: 15px;
}
.btn__label {
  position: relative;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
}
.btn--ghost {
  background: transparent;
  background-image: linear-gradient(120deg, #a78bfa, #f472b6, #fbbf24, #22d3ee, #a78bfa);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, 0.14),
    0 0 16px rgba(124, 58, 237, 0.12);
  animation: grad-btn-flow 6s linear infinite;
}
.btn--ghost::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.08), transparent 40%);
  pointer-events: none;
}
.btn--ghost .btn__label {
  text-shadow: none;
}
.btn:hover {
  filter: brightness(1.12) saturate(1.15);
  transform: translateY(-2px);
}
.btn--solid:hover {
  box-shadow:
    0 0 26px rgba(124, 58, 237, 0.55),
    0 0 64px rgba(219, 39, 119, 0.35),
    0 12px 28px rgba(0, 0, 0, 0.5);
}
.btn--ghost:hover {
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, 0.3),
    0 0 24px rgba(124, 58, 237, 0.3);
}
.btn:active {
  transform: translateY(1px) scale(0.98);
  filter: brightness(1.02);
  transition-duration: 100ms;
}
.btn:focus-visible {
  outline: 2px solid #a78bfa;
  outline-offset: 3px;
}
@keyframes grad-btn-flow {
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
</style>
