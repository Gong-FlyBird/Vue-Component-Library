<script setup lang="ts">
withDefaults(defineProps<{
  number?: string
  title?: string
  body?: string
}>(), {
  number: '01',
  title: 'BRUTAL TITLE',
  body: 'Hard borders. Hard shadows. No mercy for soft design.',
})
</script>

<template>
  <div class="brutal-card">
    <div class="brutal-card__strip">
      <span class="dot dot--red"></span>
      <span class="dot dot--yellow"></span>
      <span class="dot dot--green"></span>
    </div>
    <div class="brutal-card__body">
      <div class="brutal-card__display">
        <span class="brutal-card__number">{{ number }}</span>
        <span class="brutal-card__cross" aria-hidden="true"></span>
      </div>
      <div class="brutal-card__text">
        <h3 class="brutal-card__title">{{ title }}</h3>
        <p class="brutal-card__body-text">{{ body }}</p>
        <button class="brutal-card__btn" type="button">
          <slot name="action">GO</slot>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brutal-card {
  max-width: 100%;
  background: #f5f0e8;
  border: 2px solid #111;
  box-shadow: 8px 8px 0 #111;
}

.brutal-card__strip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.75rem;
  background: #111;
}

.dot {
  width: 0.8rem;
  height: 0.8rem;
  border: 2px solid #f5f0e8;
}

.dot--red { background: #ff4d6d; }
.dot--yellow { background: #ffd02f; }
.dot--green { background: #7ee081; }

.brutal-card__body {
  display: flex;
  gap: 1.4rem;
  align-items: center;
  padding: 1.5rem;
}

.brutal-card__display {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 9.5rem;
  height: 9.5rem;
  background: #2f7df6;
  border: 2px solid #111;
  box-shadow: 4px 4px 0 #111;
  overflow: hidden;
}

.brutal-card__number {
  font-family: 'Arial Black', Arial, sans-serif;
  font-weight: 900;
  font-size: 4.4rem;
  line-height: 1;
  color: #f5f0e8;
  z-index: 1;
}

.brutal-card__cross::before,
.brutal-card__cross::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6rem;
  height: 6rem;
  transform: translate(-50%, -50%) rotate(45deg);
  border: 3px dashed #ff4d6d;
}

.brutal-card__cross::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.brutal-card__text {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-width: 0;
}

.brutal-card__title {
  margin: 0;
  font-family: 'Arial Black', Arial, sans-serif;
  font-weight: 900;
  font-size: 1.15rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #111;
}

.brutal-card__body-text {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #333;
}

.brutal-card__btn {
  align-self: flex-start;
  margin-top: 0.4rem;
  padding: 0.5rem 1.1rem;
  font-family: 'Arial Black', Arial, sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f5f0e8;
  background: #ff4d6d;
  border: 2px solid #111;
  box-shadow: 3px 3px 0 #111;
  cursor: pointer;
  transition: transform 100ms ease, box-shadow 100ms ease;
}

.brutal-card__btn:hover {
  transform: translate(1.5px, 1.5px);
  box-shadow: 1.5px 1.5px 0 #111;
}

.brutal-card__btn:active {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 #111;
}

.brutal-card__btn:focus-visible {
  outline: 3px dashed #111;
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .brutal-card__body {
    flex-direction: column;
  }
}
</style>
