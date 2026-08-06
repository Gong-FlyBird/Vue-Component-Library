<script setup lang="ts">
import NeuToggle from './NeuToggle.vue'
import NeuSlider from './NeuSlider.vue'
</script>

<template>
  <div class="neu-card">
    <h3 class="neu-card__title">STUDIO WIDGET</h3>
    <div class="neu-card__inset">
      <div class="neu-card__row">
        <span class="neu-card__row-label">Volume</span>
        <NeuSlider />
      </div>
      <div class="neu-card__row">
        <span class="neu-card__row-label">Power</span>
        <NeuToggle />
      </div>
      <div class="neu-card__row neu-card__row--end">
        <span class="neu-card__row-label">Status</span>
        <span class="neu-card__status">READY</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neu-card {
  max-width: 100%;
  padding: 1.6rem;
  background: #e0e5ec;
  border-radius: 24px;
  box-shadow:
    12px 12px 24px #a3b1c6,
    -12px -12px 24px #ffffff;
}

.neu-card__title {
  margin: 0 0 1.2rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #43557a;
  text-align: center;
}

.neu-card__inset {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  padding: 1.3rem;
  border-radius: 18px;
  background: #e0e5ec;
  box-shadow:
    inset 8px 8px 16px #a3b1c6,
    inset -8px -8px 16px #ffffff;
}

.neu-card__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.neu-card__row--end {
  border-top: 1px solid rgba(163, 177, 198, 0.35);
  padding-top: 1rem;
}

.neu-card__row-label {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  color: #5b6b85;
}

.neu-card__status {
  font-family: 'SF Mono', Consolas, monospace;
  font-weight: 700;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: #6a8b5f;
}
</style>
