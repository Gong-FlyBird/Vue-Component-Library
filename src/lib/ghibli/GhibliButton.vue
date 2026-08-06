<script setup lang="ts">
import { Cloud, Sprout } from 'lucide-vue-next'

withDefaults(defineProps<{ variant?: 'grass' | 'sky' }>(), { variant: 'grass' })
</script>

<template>
  <div class="stage">
    <button type="button" class="btn" :class="variant === 'sky' ? 'btn--sky' : ''">
      <Sprout v-if="variant !== 'sky'" :size="16" />
      <Cloud v-else :size="16" />
      <span class="label"><slot>Take a walk</slot></span>
    </button>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #d8efe6;
  padding: 3rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 2.3rem;
  border: none;
  border-radius: 999px;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(180deg, #add97f 0%, #9dcb6f 60%, #8fbf5e 100%);
  text-shadow: 0 1px 2px rgba(62, 94, 32, 0.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 2px 3px rgba(141, 183, 97, 0.55),
    0 7px 12px rgba(141, 183, 97, 0.4),
    0 14px 26px rgba(141, 183, 97, 0.22);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.25s ease,
    box-shadow 0.3s ease;
}
.btn:hover {
  transform: translateY(-3px);
  filter: brightness(1.06);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.45),
    0 3px 5px rgba(141, 183, 97, 0.6),
    0 10px 16px rgba(141, 183, 97, 0.45),
    0 20px 32px rgba(141, 183, 97, 0.25);
}
.btn:active {
  transform: translateY(-1px) scale(0.98);
  filter: brightness(0.98);
}
.btn:focus-visible {
  outline: 3px solid rgba(231, 111, 81, 0.55);
  outline-offset: 3px;
}
.btn--sky {
  background: linear-gradient(180deg, #bde3f4 0%, #a8d8ea 60%, #96cfe5 100%);
  text-shadow: 0 1px 2px rgba(64, 120, 150, 0.4);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 2px 3px rgba(143, 190, 220, 0.55),
    0 7px 12px rgba(143, 190, 220, 0.4),
    0 14px 26px rgba(143, 190, 220, 0.22);
}
.btn--sky:hover {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    0 3px 5px rgba(143, 190, 220, 0.6),
    0 10px 16px rgba(143, 190, 220, 0.45),
    0 20px 32px rgba(143, 190, 220, 0.25);
}
</style>
