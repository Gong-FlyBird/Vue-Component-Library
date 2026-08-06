<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'white' | 'dark' | 'gradient'

const props = withDefaults(defineProps<{
  variant?: Variant
  title?: string
  text?: string
}>(), {
  variant: 'white',
  title: 'Title',
  text: '',
})

const classes = computed(() => [
  'bento-card',
  `bento-card--${props.variant}`,
])
</script>

<template>
  <div :class="classes">
    <div class="bento-card__inner">
      <div class="bento-card__top">
        <slot name="icon">
          <span class="bento-card__icon-dot" aria-hidden="true"></span>
        </slot>
      </div>
      <h3 class="bento-card__title">{{ title }}</h3>
      <p v-if="text" class="bento-card__text">{{ text }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.bento-card {
  height: 100%;
  min-width: 0;
  border-radius: 24px;
  padding: 1.15rem;
  transition: transform 250ms ease, box-shadow 250ms ease;
}

.bento-card:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.14);
}

.bento-card:focus-within {
  outline: 3px solid #0a84ff;
  outline-offset: 2px;
}

.bento-card--white {
  background: #ffffff;
  border: 1px solid #e5e5ea;
}

.bento-card--dark {
  background: #1d1d1f;
  color: #f5f5f7;
}

.bento-card--dark:hover {
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.4);
}

.bento-card--gradient {
  background: linear-gradient(135deg, #0a84ff 0%, #6e5bff 100%);
  color: #ffffff;
}

.bento-card__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.bento-card__top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.4rem;
}

.bento-card__icon-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: #e5e5ea;
}

.bento-card--dark .bento-card__icon-dot {
  background: rgba(255, 255, 255, 0.35);
}

.bento-card--gradient .bento-card__icon-dot {
  background: rgba(255, 255, 255, 0.55);
}

.bento-card__title {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 700;
  font-size: 1.02rem;
  color: #1d1d1f;
}

.bento-card--dark .bento-card__title,
.bento-card--gradient .bento-card__title {
  color: #f5f5f7;
}

.bento-card__text {
  margin: 0.35rem 0 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.82rem;
  line-height: 1.45;
  color: #86868b;
}

.bento-card--dark .bento-card__text {
  color: #a1a1a6;
}

.bento-card--gradient .bento-card__text {
  color: rgba(255, 255, 255, 0.85);
}
</style>
