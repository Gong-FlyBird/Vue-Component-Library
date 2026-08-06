<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: 'SHINE ON',
})
</script>

<template>
  <button class="y2k-button" type="button">
    <span class="y2k-button__border" aria-hidden="true"></span>
    <span class="y2k-button__sparkle" aria-hidden="true"></span>
    <span class="y2k-button__sparkle y2k-button__sparkle--two" aria-hidden="true"></span>
    <span class="y2k-button__label"><slot>{{ label }}</slot></span>
  </button>
</template>

<style scoped>
.y2k-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2.2rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background:
    linear-gradient(180deg, #ffffff 0%, #e8e8f2 48%, #c9c9d8 100%);
  box-shadow:
    0 6px 14px rgba(178, 141, 248, 0.45),
    0 3px 4px rgba(31, 31, 46, 0.2),
    inset 0 -4px 6px rgba(31, 31, 46, 0.12),
    inset 0 3px 5px rgba(255, 255, 255, 0.95);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.y2k-button__border {
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  background: conic-gradient(from 180deg, #ffd1dc, #b28df8, #7fd8f7, #ffd1dc);
  z-index: -1;
  filter: saturate(1.3);
}

.y2k-button__label {
  font-family: 'Verdana', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffffff 0%, #c9c9d8 55%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-stroke: 0.5px rgba(31, 31, 46, 0.35);
}

.y2k-button__sparkle {
  position: absolute;
  top: -0.4rem;
  right: 0.8rem;
  font-size: 1rem;
  line-height: 1;
  color: #b28df8;
  opacity: 0;
  transform: scale(0.3) rotate(0deg);
  transition: opacity 200ms ease, transform 300ms ease;
}

.y2k-button__sparkle::before {
  content: '\2726';
}

.y2k-button__sparkle--two {
  top: auto;
  right: -0.2rem;
  bottom: 0.9rem;
  color: #7fd8f7;
  transition-delay: 120ms;
}

.y2k-button:hover .y2k-button__sparkle {
  opacity: 1;
  transform: scale(1.15) rotate(40deg);
}

.y2k-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 20px rgba(178, 141, 248, 0.55),
    0 4px 6px rgba(31, 31, 46, 0.2),
    inset 0 -4px 6px rgba(31, 31, 46, 0.12),
    inset 0 3px 5px rgba(255, 255, 255, 0.95);
}

.y2k-button:active {
  transform: translateY(1px) scale(0.98);
  box-shadow:
    0 2px 4px rgba(178, 141, 248, 0.4),
    inset 0 3px 8px rgba(31, 31, 46, 0.25);
}

.y2k-button:focus-visible {
  outline: 3px solid #b28df8;
  outline-offset: 3px;
}

@keyframes y2k-twinkle {
  0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.25) rotate(40deg); }
}

.y2k-button:hover .y2k-button__sparkle {
  animation: y2k-twinkle 1.1s ease-in-out infinite;
}

.y2k-button:hover .y2k-button__sparkle--two {
  animation-delay: 0.45s;
}
</style>
