<script setup lang="ts">
withDefaults(
  defineProps<{ label?: string; tone?: 'violet' | 'cyan' | 'amber' }>(),
  { label: 'Live', tone: 'violet' }
)
</script>

<template>
  <div class="stage">
    <span class="badge" :class="`badge--${tone}`">
      <span class="badge__pulse"></span>
      <span class="badge__text"><slot>{{ label }}</slot></span>
    </span>
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
.badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.42rem 1.15rem;
  border-radius: 999px;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(120deg, #6d28d9, #db2777, #f59e0b, #6d28d9);
  background-size: 240% 100%;
  background-position: 0% 50%;
  animation: grad-badge-flow 4.5s ease-in-out infinite;
  box-shadow:
    0 0 14px rgba(124, 58, 237, 0.45),
    0 0 34px rgba(219, 39, 119, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);
  transition: transform 200ms ease, box-shadow 250ms ease;
}
.badge--cyan {
  background: linear-gradient(120deg, #0891b2, #06b6d4, #22d3ee, #34d399, #0891b2);
  background-size: 240% 100%;
  box-shadow:
    0 0 14px rgba(6, 182, 212, 0.45),
    0 0 34px rgba(34, 211, 238, 0.22),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);
}
.badge--amber {
  background: linear-gradient(120deg, #b45309, #f59e0b, #fbbf24, #f97316, #b45309);
  background-size: 240% 100%;
  box-shadow:
    0 0 14px rgba(245, 158, 11, 0.45),
    0 0 34px rgba(249, 115, 22, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.35);
}
.badge__pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
  animation: grad-badge-pulse 1.6s ease-in-out infinite;
}
.badge__text {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
}
.badge:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 22px rgba(124, 58, 237, 0.6),
    0 0 52px rgba(219, 39, 119, 0.35),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}
.badge--cyan:hover {
  box-shadow:
    0 0 22px rgba(6, 182, 212, 0.6),
    0 0 52px rgba(34, 211, 238, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}
.badge--amber:hover {
  box-shadow:
    0 0 22px rgba(245, 158, 11, 0.6),
    0 0 52px rgba(249, 115, 22, 0.35),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}
.badge:active {
  transform: translateY(1px) scale(0.97);
  filter: brightness(1.05);
}
@keyframes grad-badge-flow {
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
@keyframes grad-badge-pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.72);
    opacity: 0.75;
  }
}
</style>
