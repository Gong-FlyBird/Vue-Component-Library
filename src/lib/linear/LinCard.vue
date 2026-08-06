<script setup lang="ts">
import { Layers } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    title?: string
    body?: string
  }>(),
  {
    title: 'Edge Functions',
    body: 'Deploy logic at the edge with sub-50ms cold starts and automatic region routing.',
  },
)
</script>

<template>
  <article class="lin-card">
    <div class="lin-card__top">
      <span class="lin-card__icon">
        <Layers :size="18" aria-hidden="true" />
      </span>
      <h3 class="lin-card__title">{{ title }}</h3>
      <p class="lin-card__body">{{ body }}</p>
    </div>

    <div class="lin-card__stats">
      <span class="lin-card__stat">
        <span class="lin-card__stat-num">42ms</span>
        <span class="lin-card__stat-label">p50 latency</span>
      </span>
      <span class="lin-card__stat">
        <span class="lin-card__stat-num">99.98%</span>
        <span class="lin-card__stat-label">uptime</span>
      </span>
      <span class="lin-card__stat">
        <span class="lin-card__stat-num">1.2k</span>
        <span class="lin-card__stat-label">requests/s</span>
      </span>
    </div>
  </article>
</template>

<style scoped>
.lin-card {
  max-width: 100%;
  background: #1b1c1f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;
}

.lin-card:hover {
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.45),
    0 0 20px rgba(94, 106, 210, 0.12);
}

.lin-card__top {
  padding: 1.15rem 1.2rem 1rem;
}

.lin-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(94, 106, 210, 0.14);
  color: #8b93e8;
}

.lin-card__title {
  margin: 0.85rem 0 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #f5f5f7;
}

.lin-card__body {
  margin: 0.45rem 0 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.82rem;
  line-height: 1.6;
  color: #8b8f98;
}

.lin-card__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.015);
}

.lin-card__stat {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.85rem 1rem;
}

.lin-card__stat + .lin-card__stat {
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.lin-card__stat-num {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.82rem;
  font-weight: 600;
  color: #f2f3f5;
}

.lin-card__stat-label {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.66rem;
  color: #757983;
}
</style>
