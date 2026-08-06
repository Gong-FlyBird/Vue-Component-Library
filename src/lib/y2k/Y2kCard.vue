<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: 'PRISM DREAM',
  subtitle: 'a little internet fairy tale',
})
</script>

<template>
  <article class="y2k-card">
    <span class="y2k-card__border" aria-hidden="true"></span>
    <span class="y2k-card__star y2k-card__star--a" aria-hidden="true"></span>
    <span class="y2k-card__star y2k-card__star--b" aria-hidden="true"></span>
    <span class="y2k-card__star y2k-card__star--c" aria-hidden="true"></span>
    <div class="y2k-card__body">
      <h3 class="y2k-card__title">{{ title }}</h3>
      <p class="y2k-card__subtitle">{{ subtitle }}</p>
      <div class="y2k-card__actions">
        <button class="y2k-card__sticker" type="button">SAVE ME</button>
        <button class="y2k-card__sticker y2k-card__sticker--alt" type="button">FOLLOW</button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.y2k-card {
  position: relative;
  max-width: 100%;
  padding: 2.2rem;
  border-radius: 16px;
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.9), transparent 45%),
    linear-gradient(135deg, #ffe9ef 0%, #ead9ff 50%, #d8f3ff 100%);
  box-shadow:
    0 14px 30px rgba(178, 141, 248, 0.35),
    inset 0 2px 4px rgba(255, 255, 255, 0.9);
  overflow: hidden;
}

.y2k-card__border {
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: inherit;
  background: conic-gradient(from 210deg, #ffd1dc, #b28df8, #7fd8f7, #ff9fb4, #ffd1dc);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.y2k-card__body {
  position: relative;
  z-index: 1;
  text-align: center;
}

.y2k-card__title {
  margin: 0;
  font-family: 'Verdana', -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 800;
  font-size: 1.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffffff 0%, #c9c9d8 60%, #f4f4fb 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(178, 141, 248, 0.5);
}

.y2k-card__subtitle {
  margin: 0.6rem 0 1.6rem;
  font-family: 'Trebuchet MS', -apple-system, sans-serif;
  font-style: italic;
  font-size: 0.9rem;
  color: #5f4f8a;
}

.y2k-card__actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.y2k-card__sticker {
  padding: 0.55rem 1.4rem;
  border: none;
  border-radius: 999px;
  font-family: 'Verdana', sans-serif;
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  color: #fff;
  background: linear-gradient(135deg, #ff9fb4, #b28df8);
  box-shadow: 0 5px 12px rgba(178, 141, 248, 0.5), inset 0 2px 3px rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.y2k-card__sticker--alt {
  background: linear-gradient(135deg, #7fd8f7, #8fb7ff);
}

.y2k-card__sticker:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 8px 16px rgba(178, 141, 248, 0.6), inset 0 2px 3px rgba(255, 255, 255, 0.6);
}

.y2k-card__sticker:active {
  transform: translateY(0) scale(0.96);
}

.y2k-card__sticker:focus-visible {
  outline: 3px solid #b28df8;
  outline-offset: 2px;
}

.y2k-card__star {
  position: absolute;
  z-index: 1;
  font-size: 1.1rem;
  line-height: 1;
  pointer-events: none;
  animation: y2k-star 2.4s ease-in-out infinite;
}

.y2k-card__star::before {
  content: '\2726';
}

.y2k-card__star--a { top: 1rem; left: 1.4rem; color: #ff9fb4; }
.y2k-card__star--b { top: 2.4rem; right: 1.6rem; color: #7fd8f7; animation-delay: 0.7s; }
.y2k-card__star--c { bottom: 1.2rem; left: 2.2rem; color: #b28df8; animation-delay: 1.3s; }

@keyframes y2k-star {
  0%, 100% { opacity: 0.35; transform: scale(0.7) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(50deg); }
}
</style>
