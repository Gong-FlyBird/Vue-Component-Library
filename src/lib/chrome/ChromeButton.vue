<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'md' | 'lg' }>(), { size: 'md' })
</script>

<template>
  <div class="stage">
    <button type="button" class="btn" :class="`btn--${size}`">
      <span class="btn__sheen"></span>
      <span class="btn__label"><slot>Press me</slot></span>
    </button>
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
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2c3441;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.65);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0) 35%),
    linear-gradient(180deg, #eef2f7 0%, #d4dae3 45%, #b4bcc9 55%, #ccd3dd 100%);
  border: 2px solid #8f98a6;
  border-radius: 10px;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.95),
    inset 0 -4px 8px rgba(35, 43, 55, 0.38),
    inset 4px 0 8px -4px rgba(255, 255, 255, 0.5),
    inset -4px 0 8px -4px rgba(255, 255, 255, 0.5),
    0 3px 6px rgba(35, 43, 55, 0.35),
    0 9px 20px rgba(35, 43, 55, 0.22);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}
.btn--sm {
  padding: 0.5rem 1.3rem;
  font-size: 11px;
  border-radius: 8px;
}
.btn--md {
  padding: 0.8rem 2.1rem;
  font-size: 13px;
}
.btn--lg {
  padding: 1.05rem 2.8rem;
  font-size: 15px;
  border-radius: 12px;
}
.btn__sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 32%,
    rgba(255, 255, 255, 0.4) 47%,
    rgba(255, 255, 255, 0.85) 52%,
    transparent 66%
  );
  transform: translateX(-130%);
  transition: transform 0.5s ease;
  pointer-events: none;
}
.btn:hover {
  filter: brightness(1.06);
  transform: translateY(-2px);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.95),
    inset 0 -4px 8px rgba(35, 43, 55, 0.38),
    inset 4px 0 8px -4px rgba(255, 255, 255, 0.5),
    inset -4px 0 8px -4px rgba(255, 255, 255, 0.5),
    0 5px 10px rgba(35, 43, 55, 0.38),
    0 14px 30px rgba(35, 43, 55, 0.26);
}
.btn:hover .btn__sheen {
  transform: translateX(130%);
}
.btn:active {
  transform: translateY(1px) scale(0.99);
  filter: brightness(0.98);
  background:
    linear-gradient(180deg, #c0c8d4 0%, #b3bbc8 50%, #a6aebc 100%);
  box-shadow:
    inset 0 4px 9px rgba(35, 43, 55, 0.42),
    inset 0 -1px 1px rgba(255, 255, 255, 0.55),
    inset -3px 0 6px -3px rgba(255, 255, 255, 0.35),
    inset 3px 0 6px -3px rgba(255, 255, 255, 0.35),
    0 1px 2px rgba(35, 43, 55, 0.3);
}
.btn:focus-visible {
  outline: 2px solid #5d687a;
  outline-offset: 3px;
}
</style>
