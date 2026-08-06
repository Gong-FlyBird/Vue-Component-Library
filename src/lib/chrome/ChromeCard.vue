<script setup lang="ts">
withDefaults(
  defineProps<{ title?: string; elevation?: 'flat' | 'raised' }>(),
  { title: 'Chrome Panel', elevation: 'raised' }
)
</script>

<template>
  <div class="stage">
    <article class="card" :class="`card--${elevation}`">
      <span class="card__reflection"></span>
      <span class="card__grain"></span>
      <header class="card__head">
        <span class="card__dot"></span>
        <h3 class="card__title">{{ title }}</h3>
        <span class="card__lock">●</span>
      </header>
      <div class="card__body">
        <div class="card__bodyline card__bodyline--wide"></div>
        <div class="card__bodyline card__bodyline--mid"></div>
        <div class="card__bodyline card__bodyline--narrow"></div>
        <div class="card__demo">
          <span class="card__demoicon"></span>
          <span class="card__demotext">Machined · Anodized · Polished</span>
        </div>
      </div>
    </article>
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
.card {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: 1.4rem;
  box-sizing: border-box;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  overflow: hidden;
  background:
    repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0px,
      rgba(255, 255, 255, 0.05) 1px,
      rgba(30, 38, 50, 0.06) 2px,
      rgba(30, 38, 50, 0.06) 3px
    ),
    linear-gradient(180deg, #f2f5f9 0%, #dde2ea 40%, #b9c1cd 60%, #cfd6df 100%);
  border: 2px solid #96a0af;
}
.card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.02) 28%);
  box-shadow:
    inset 0 -2px 3px rgba(30, 38, 50, 0.35),
    inset 0 2px 2px rgba(255, 255, 255, 0.9);
}
.card--raised {
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.9),
    0 12px 24px rgba(30, 38, 50, 0.35),
    0 4px 8px rgba(30, 38, 50, 0.28);
}
.card--flat {
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.85),
    inset 0 -3px 6px rgba(30, 38, 50, 0.22),
    0 2px 4px rgba(30, 38, 50, 0.2);
}
.card__grain {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: repeating-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0 1px,
    rgba(30, 38, 50, 0.05) 1px 2px
  );
  mix-blend-mode: overlay;
}
.card__reflection {
  position: absolute;
  top: 0;
  left: 8%;
  right: 8%;
  height: 38%;
  border-radius: 0 0 50% 50%;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0));
  filter: blur(2px);
}
.card__head {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid rgba(30, 38, 50, 0.25);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}
.card__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fff, #6f7b8c 70%);
  box-shadow:
    inset 0 -1px 2px rgba(30, 38, 50, 0.5),
    0 1px 1px rgba(255, 255, 255, 0.7);
}
.card__title {
  margin: 0;
  flex: 1;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #333d4c;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
}
.card__lock {
  font-size: 0.6rem;
  color: #5b6678;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}
.card__body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-top: 1rem;
}
.card__bodyline {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(180deg, #b7bfcb 0%, #cbd2dc 55%, #aeb7c4 100%);
  box-shadow:
    inset 0 1px 2px rgba(30, 38, 50, 0.35),
    inset 0 -1px 1px rgba(255, 255, 255, 0.6);
}
.card__bodyline--wide {
  width: 82%;
}
.card__bodyline--mid {
  width: 66%;
}
.card__bodyline--narrow {
  width: 48%;
}
.card__demo {
  margin-top: 0.55rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 0.9rem;
  border-radius: 9px;
  background: linear-gradient(180deg, #b6bfcc 0%, #c6cdd8 60%, #adb6c3 100%);
  box-shadow:
    inset 0 2px 4px rgba(30, 38, 50, 0.35),
    inset 0 -1px 1px rgba(255, 255, 255, 0.55),
    0 1px 1px rgba(255, 255, 255, 0.5);
}
.card__demoicon {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0 40%, transparent 40%),
    linear-gradient(180deg, #8f9aaa, #5d687b);
  box-shadow:
    inset 0 -1px 2px rgba(30, 38, 50, 0.6),
    0 1px 1px rgba(255, 255, 255, 0.6);
}
.card__demotext {
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #39424f;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.55);
}
</style>
