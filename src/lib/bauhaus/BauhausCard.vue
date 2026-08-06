<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  text?: string
}>(), {
  title: 'FORM FOLLOWS FUNCTION',
  text: 'Art and technology unite in a new order. Color, geometry and spirit compose the modern stage.',
})
</script>

<template>
  <article class="bauhaus-card">
    <div class="bauhaus-card__art">
      <span class="bauhaus-card__circle"></span>
      <span class="bauhaus-card__triangle"></span>
      <span class="bauhaus-card__square"></span>
    </div>
    <div class="bauhaus-card__text">
      <h3 class="bauhaus-card__title">{{ title }}</h3>
      <p class="bauhaus-card__body">{{ text }}</p>
    </div>
  </article>
</template>

<style scoped>
.bauhaus-card {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  max-width: 100%;
  background: #151515;
  border: 3px solid #151515;
  box-shadow: 12px 12px 0 #1d3f8f;
}

.bauhaus-card__art {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 14rem;
  background: #e03a3e;
  overflow: hidden;
}

.bauhaus-card__circle {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  width: 6.5rem;
  height: 6.5rem;
  background: #f2c400;
  border: 3px solid #151515;
  border-radius: 999px;
}

.bauhaus-card__triangle {
  position: absolute;
  left: 1.2rem;
  bottom: 1.2rem;
  width: 0;
  height: 0;
  border-left: 3.4rem solid transparent;
  border-right: 3.4rem solid transparent;
  border-bottom: 5.2rem solid #1d3f8f;
}

.bauhaus-card__square {
  width: 4.4rem;
  height: 4.4rem;
  background: #f2c400;
  border: 3px solid #151515;
  z-index: 1;
  transition: transform 300ms ease, background 300ms ease;
}

.bauhaus-card:hover .bauhaus-card__square {
  transform: rotate(45deg) scale(1.15);
  background: #f2ede4;
}

.bauhaus-card__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.8rem;
  background: #f2ede4;
}

.bauhaus-card__title {
  margin: 0;
  font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 900;
  font-size: 1.15rem;
  line-height: 1.25;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #151515;
}

.bauhaus-card__body {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 400;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #444;
}

@media (max-width: 480px) {
  .bauhaus-card {
    grid-template-columns: 1fr;
  }

  .bauhaus-card__art {
    min-height: 10rem;
  }
}
</style>
