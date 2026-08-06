<script setup lang="ts">
withDefaults(
  defineProps<{ label?: string; tone?: 'silver' | 'gold' }>(),
  { label: 'Chrome', tone: 'silver' }
)
</script>

<template>
  <div class="stage">
    <span class="badge" :class="`badge--${tone}`">
      <span class="badge__gloss"></span>
      <span class="badge__text"><slot>{{ label }}</slot></span>
    </span>
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
.badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 1.3rem;
  border-radius: 999px;
  border: 2px solid #939daa;
  overflow: hidden;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #2f3846;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.75);
  background:
    repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.06) 0 1px,
      rgba(30, 38, 50, 0.07) 1px 2px
    ),
    linear-gradient(180deg, #f4f7fa 0%, #d7dde6 48%, #aab3c1 55%, #ccd3dd 100%);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.95),
    inset 0 -3px 5px rgba(30, 38, 50, 0.32),
    0 2px 4px rgba(30, 38, 50, 0.3),
    0 6px 14px rgba(30, 38, 50, 0.18);
  transition: transform 200ms ease, filter 200ms ease, box-shadow 200ms ease;
  cursor: default;
}
.badge--gold {
  border-color: #a8894b;
  color: #4b3a17;
  background:
    repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08) 0 1px,
      rgba(90, 62, 8, 0.08) 1px 2px
    ),
    linear-gradient(180deg, #fdf3d0 0%, #ecd294 45%, #c9a34e 56%, #e5cd8b 100%);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.95),
    inset 0 -3px 5px rgba(92, 64, 12, 0.4),
    0 2px 4px rgba(60, 44, 12, 0.35),
    0 6px 14px rgba(60, 44, 12, 0.2);
}
.badge__gloss {
  position: absolute;
  top: 0;
  left: 6%;
  right: 6%;
  height: 52%;
  border-radius: 999px 999px 60% 60%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  pointer-events: none;
}
.badge__text {
  position: relative;
}
.badge:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.95),
    inset 0 -3px 5px rgba(30, 38, 50, 0.32),
    0 4px 8px rgba(30, 38, 50, 0.34),
    0 10px 22px rgba(30, 38, 50, 0.22);
}
.badge:active {
  transform: translateY(1px);
  filter: brightness(0.97);
  box-shadow:
    inset 0 3px 6px rgba(30, 38, 50, 0.35),
    inset 0 -1px 1px rgba(255, 255, 255, 0.55),
    0 1px 2px rgba(30, 38, 50, 0.25);
}
</style>
