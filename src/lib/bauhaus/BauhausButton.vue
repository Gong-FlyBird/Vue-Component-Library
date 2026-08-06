<script setup lang="ts">
import { computed } from 'vue'

type Shape = 'arc' | 'capsule'

const props = withDefaults(defineProps<{
  label?: string
  shape?: Shape
  color?: 'red' | 'blue' | 'yellow' | 'black'
}>(), {
  label: 'ENTER',
  shape: 'arc',
  color: 'black',
})

const classes = computed(() => [
  'bauhaus-button',
  `bauhaus-button--${props.shape}`,
  `bauhaus-button--${props.color}`,
])
</script>

<template>
  <button :class="classes" type="button">
    <span class="bauhaus-button__label">{{ label }}</span>
    <span class="bauhaus-button__arc" aria-hidden="true"></span>
  </button>
</template>

<style scoped>
.bauhaus-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  min-width: 12rem;
  padding: 0.85rem 1.6rem;
  font-family: 'Arial Black', 'Helvetica Neue', Arial, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 900;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #f2ede4;
  background: #151515;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  transition: background 250ms ease, color 250ms ease, transform 200ms ease;
}

.bauhaus-button__label {
  position: relative;
  z-index: 1;
}

.bauhaus-button__arc {
  position: absolute;
  top: 50%;
  left: -30%;
  width: 60%;
  height: 130%;
  transform: translateY(-50%);
  background: #f2c400;
  border-radius: 999px;
  z-index: 0;
  transition: left 300ms ease, width 300ms ease;
}

.bauhaus-button:hover .bauhaus-button__arc {
  left: 20%;
  width: 60%;
}

.bauhaus-button:active {
  transform: scale(0.96);
}

.bauhaus-button:focus-visible {
  outline: 3px solid #e03a3e;
  outline-offset: 4px;
}

.bauhaus-button--arc:hover .bauhaus-button__label {
  color: #151515;
}

.bauhaus-button--capsule {
  border-radius: 0 999px 999px 0;
  background: #e03a3e;
  color: #f2ede4;
}

.bauhaus-button--capsule .bauhaus-button__arc {
  display: none;
}

.bauhaus-button--capsule::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 2.4rem;
  height: 2.4rem;
  transform: translateY(-50%);
  background: #f2c400;
  border-radius: 999px;
  transition: width 250ms ease, height 250ms ease;
}

.bauhaus-button--capsule:hover::before {
  width: 3rem;
  height: 3rem;
}

.bauhaus-button--capsule:hover {
  background: #1d3f8f;
  color: #f2ede4;
}

.bauhaus-button--blue .bauhaus-button__arc {
  background: #1d3f8f;
}

.bauhaus-button--blue:hover .bauhaus-button__label {
  color: #f2ede4;
}

.bauhaus-button--yellow {
  background: #f2c400;
  color: #151515;
}

.bauhaus-button--yellow .bauhaus-button__arc {
  background: #151515;
}

.bauhaus-button--yellow:hover .bauhaus-button__label {
  color: #f2c400;
}

.bauhaus-button--red {
  background: #e03a3e;
}

.bauhaus-button--red .bauhaus-button__arc {
  background: #1d3f8f;
}

.bauhaus-button--red:hover .bauhaus-button__label {
  color: #f2ede4;
}
</style>
