<script setup lang="ts">
defineProps<{
  width?: string
}>()
</script>

<template>
  <div class="hermes-divider" :style="{ maxWidth: width }" aria-hidden="true">
    <span class="hermes-divider__line"></span>
    <span class="hermes-divider__rays hermes-divider__rays--left"></span>
    <span class="hermes-divider__diamond"></span>
    <span class="hermes-divider__rays hermes-divider__rays--right"></span>
    <span class="hermes-divider__line"></span>
  </div>
</template>

<style scoped>
.hermes-divider {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: 100%;
}

.hermes-divider__line {
  flex: 1;
  height: 1px;
}

.hermes-divider__line:first-child {
  background: linear-gradient(90deg, rgba(185, 146, 79, 0.12), rgba(185, 146, 79, 0.85));
}

.hermes-divider__line:last-child {
  background: linear-gradient(90deg, rgba(185, 146, 79, 0.85), rgba(185, 146, 79, 0.12));
}

.hermes-divider__rays {
  position: relative;
  width: 0.9rem;
  height: 1px;
  flex-shrink: 0;
}

.hermes-divider__rays::before,
.hermes-divider__rays::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: #b9924f;
}

.hermes-divider__rays::before {
  top: -3px;
  transform: rotate(-14deg);
  opacity: 0.55;
}

.hermes-divider__rays::after {
  top: 3px;
  transform: rotate(14deg);
  opacity: 0.55;
}

.hermes-divider__rays--left {
  background: linear-gradient(90deg, rgba(185, 146, 79, 0.25), #b9924f);
}

.hermes-divider__rays--right {
  background: linear-gradient(90deg, #b9924f, rgba(185, 146, 79, 0.25));
}

.hermes-divider__rays--left::before,
.hermes-divider__rays--left::after {
  background: linear-gradient(90deg, rgba(185, 146, 79, 0.35), #b9924f);
}

.hermes-divider__rays--right::before,
.hermes-divider__rays--right::after {
  background: linear-gradient(90deg, #b9924f, rgba(185, 146, 79, 0.35));
}

.hermes-divider__diamond {
  width: 0.55rem;
  height: 0.55rem;
  transform: rotate(45deg);
  flex-shrink: 0;
  border: 1px solid rgba(84, 60, 22, 0.6);
  background: linear-gradient(135deg, #e3c689, #b9924f);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 0 8px rgba(185, 146, 79, 0.45);
}
</style>
