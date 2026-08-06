<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  text?: string
}>(), {
  title: 'THE GILDED HOUR',
  text: 'Geometry in gold, ambition in marble — an era of machines, moonlight and champagne towers.',
})
</script>

<template>
  <article class="deco-card">
    <span class="deco-card__frame" aria-hidden="true"></span>
    <div class="deco-card__sunburst" aria-hidden="true"></div>
    <h3 class="deco-card__title">{{ title }}</h3>
    <div class="deco-card__rules" aria-hidden="true">
      <span class="deco-card__rule deco-card__rule--thin"></span>
      <span class="deco-card__diamond"></span>
      <span class="deco-card__rule deco-card__rule--thin"></span>
    </div>
    <p class="deco-card__body">{{ text }}</p>
  </article>
</template>

<style scoped>
.deco-card {
  position: relative;
  max-width: 100%;
  padding: 2.4rem 2rem 2rem;
  background: #10131f;
  border: 1px solid #d4af37;
  outline: 1px solid #d4af37;
  outline-offset: 5px;
  text-align: center;
}

.deco-card__frame {
  position: absolute;
  inset: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.45);
  pointer-events: none;
}

.deco-card__sunburst {
  position: relative;
  width: 8.5rem;
  height: 4.5rem;
  margin: 0 auto 1.4rem;
  background: conic-gradient(
    from 180deg at 50% 100%,
    transparent 0deg,
    #d4af37 6deg,
    transparent 12deg,
    #d4af37 18deg,
    transparent 24deg,
    #d4af37 30deg,
    transparent 36deg,
    #d4af37 42deg,
    transparent 48deg,
    #d4af37 54deg,
    transparent 60deg,
    #d4af37 66deg,
    transparent 72deg,
    #d4af37 78deg,
    transparent 84deg,
    #d4af37 90deg,
    transparent 96deg,
    #d4af37 102deg,
    transparent 108deg,
    #d4af37 114deg,
    transparent 120deg,
    #d4af37 126deg,
    transparent 132deg,
    #d4af37 138deg,
    transparent 144deg,
    #d4af37 150deg,
    transparent 156deg,
    #d4af37 162deg,
    transparent 168deg,
    #d4af37 174deg,
    transparent 180deg
  );
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  -webkit-mask-image: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0.55) 60%, transparent 100%);
  mask-image: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0.55) 60%, transparent 100%);
}

.deco-card__title {
  position: relative;
  margin: 0;
  font-family: 'Didot', Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 1.45rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #e8d9a8;
  z-index: 1;
}

.deco-card__rules {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: 1.1rem 0;
}

.deco-card__rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37);
}

.deco-card__rule--thin {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6));
}

.deco-card__rule:last-child {
  transform: scaleX(-1);
}

.deco-card__diamond {
  flex-shrink: 0;
  width: 0.8rem;
  height: 0.8rem;
  transform: rotate(45deg);
  border: 1px solid #d4af37;
}

.deco-card__body {
  position: relative;
  margin: 0 auto;
  max-width: 30rem;
  font-family: 'Georgia', 'Times New Roman', -apple-system, 'PingFang SC', 'Microsoft YaHei', serif;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #f5ecd7;
  z-index: 1;
}
</style>
