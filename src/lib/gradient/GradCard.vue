<script setup lang="ts">
withDefaults(
  defineProps<{ title?: string; caption?: string }>(),
  { title: 'Aurora Panel', caption: 'living gradient border' }
)
</script>

<template>
  <div class="stage">
    <article class="card">
      <span class="card__border"></span>
      <div class="card__panel">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__caption">{{ caption }}</p>
        <div class="card__bars">
          <span class="card__bar" v-for="b in 3" :key="b"></span>
        </div>
        <div class="card__row">
          <span class="card__chip" v-for="c in 3" :key="c"></span>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
@property --grad-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
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
.card {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  padding: 2px;
  overflow: hidden;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #15151f;
  box-shadow:
    0 0 28px rgba(124, 58, 237, 0.18),
    0 0 60px rgba(219, 39, 119, 0.1),
    0 20px 40px rgba(0, 0, 0, 0.55);
  transition: box-shadow 300ms ease;
}
.card:hover {
  box-shadow:
    0 0 38px rgba(124, 58, 237, 0.32),
    0 0 80px rgba(219, 39, 119, 0.18),
    0 24px 48px rgba(0, 0, 0, 0.6);
}
.card__border {
  position: absolute;
  inset: 0;
  background: conic-gradient(
    from var(--grad-angle, 0deg),
    #6d28d9,
    #db2777,
    #f59e0b,
    #06b6d4,
    #6d28d9
  );
  background-size: 200% 200%;
  background-position: 0% 50%;
  animation:
    grad-card-spin 5s linear infinite,
    grad-card-drift 5s ease-in-out infinite;
}
.card__panel {
  position: relative;
  background: #12121b;
  border-radius: 18px;
  padding: 1.5rem;
  box-sizing: border-box;
}
.card__title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: linear-gradient(90deg, #c4b5fd, #f9a8d4, #fde68a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.card__caption {
  margin: 0.35rem 0 0;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.42);
}
.card__bars {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.2rem;
}
.card__bar {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.16));
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
}
.card__bar:nth-child(1) {
  width: 88%;
}
.card__bar:nth-child(2) {
  width: 64%;
}
.card__bar:nth-child(3) {
  width: 46%;
}
.card__row {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.2rem;
}
.card__chip {
  height: 22px;
  border-radius: 999px;
  background: linear-gradient(120deg, #6d28d9, #db2777, #f59e0b);
  background-size: 200% 100%;
  box-shadow: 0 0 10px rgba(124, 58, 237, 0.4);
}
.card__chip:nth-child(1) {
  width: 34%;
}
.card__chip:nth-child(2) {
  width: 26%;
}
.card__chip:nth-child(3) {
  width: 18%;
}
@keyframes grad-card-spin {
  to {
    --grad-angle: 360deg;
  }
}
@keyframes grad-card-drift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
