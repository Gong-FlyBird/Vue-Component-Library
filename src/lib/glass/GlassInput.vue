<script setup lang="ts">
import { computed, ref } from 'vue'
import { X } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    type?: string
  }>(),
  {
    placeholder: 'Type your email…',
    type: 'text',
  },
)

const value = ref('')
const focused = ref(false)

const floating = computed(() => focused.value || value.value.length > 0)

function clear() {
  value.value = ''
}
</script>

<template>
  <div class="glass-input">
    <label
      class="glass-input__label"
      :class="{ 'glass-input__label--float': floating }"
      :aria-hidden="floating"
    >
      {{ props.placeholder }}
    </label>
    <input
      class="glass-input__field"
      :type="props.type"
      :aria-label="props.placeholder"
      v-model="value"
      @focus="focused = true"
      @blur="focused = false"
    />
    <button
      v-if="value"
      type="button"
      class="glass-input__clear"
      aria-label="Clear input"
      @click="clear"
    >
      <X />
    </button>
  </div>
</template>

<style scoped>
.glass-input {
  position: relative;
  width: 100%;
}

.glass-input__label {
  position: absolute;
  left: 1.4rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(234, 241, 255, 0.55);
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.88rem;
  white-space: nowrap;
  pointer-events: none;
  transition:
    top 250ms ease,
    transform 250ms ease,
    font-size 250ms ease,
    color 250ms ease;
}

.glass-input__label--float {
  top: 0.5rem;
  transform: none;
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  color: #a5c9ff;
}

.glass-input__field {
  width: 100%;
  padding: 1.05rem 2.9rem 0.4rem 1.4rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px) saturate(1.5);
  -webkit-backdrop-filter: blur(14px) saturate(1.5);
  color: #eaf1ff;
  font-family: inherit;
  font-size: 0.9rem;
  outline: none;
  transition:
    border-color 250ms ease,
    box-shadow 250ms ease,
    background 250ms ease;
}

.glass-input__field:focus {
  border-color: rgba(125, 180, 255, 0.85);
  background: rgba(255, 255, 255, 0.11);
  box-shadow:
    0 0 0 4px rgba(125, 180, 255, 0.16),
    0 12px 30px rgba(80, 120, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.glass-input__clear {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.85rem;
  height: 1.85rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.14);
  color: rgba(234, 241, 255, 0.85);
  cursor: pointer;
  transition: background 200ms ease, transform 200ms ease;
}

.glass-input__clear :deep(svg) {
  width: 0.85rem;
  height: 0.85rem;
}

.glass-input__clear:hover {
  background: rgba(255, 255, 255, 0.26);
  transform: translateY(-50%) scale(1.06);
}

.glass-input__clear:focus-visible {
  outline: 2px solid #7db4ff;
  outline-offset: 2px;
}
</style>
