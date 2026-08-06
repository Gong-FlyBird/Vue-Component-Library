<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'outline' | 'solid' }>(), { variant: 'outline' })
</script>

<template>
  <div class="stage">
    <div class="demo">
      <button
        type="button"
        class="muji-btn"
        :class="variant === 'solid' ? 'muji-btn--solid' : ''"
      >
        <slot>Reserve a seat</slot>
      </button>
      <p class="hint">hover · press · focus</p>
    </div>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #f7f5ef;
  padding: 3rem 2rem;
  box-sizing: border-box;
}
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
}
.muji-btn {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #3d3a34;
  background: transparent;
  border: 1px solid #3d3a34;
  border-radius: 2px;
  padding: 0.9rem 2.7rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.15s ease;
}
.muji-btn:hover {
  background: #eee9de;
}
.muji-btn:active {
  transform: translateY(1px);
}
.muji-btn:focus-visible {
  outline: 1px solid #9c7c5c;
  outline-offset: 3px;
}
.muji-btn--solid {
  background: #3d3a34;
  color: #f7f5ef;
}
.muji-btn--solid:hover {
  background: #5a564d;
}
.hint {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: #8c8577;
}
</style>
