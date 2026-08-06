<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  label?: string
  placeholder?: string
}>(), {
  label: 'YOUR NAME',
  placeholder: 'TYPE SOMETHING LOUD...',
})

const value = ref('')
</script>

<template>
  <label class="brutal-input">
    <span class="brutal-input__label">{{ label }}</span>
    <input
      v-model="value"
      class="brutal-input__field"
      type="text"
      :placeholder="placeholder"
    />
    <span class="brutal-input__echo" aria-hidden="true">{{ value || '___' }}</span>
  </label>
</template>

<style scoped>
.brutal-input {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  max-width: 100%;
}

.brutal-input__label {
  font-family: 'Arial Black', Arial, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #111;
}

.brutal-input__field {
  padding: 0.75rem 0.9rem;
  font-family: 'SF Mono', Consolas, 'Courier New', monospace;
  font-weight: 700;
  font-size: 0.9rem;
  color: #111;
  background: #f5f0e8;
  border: 2px solid #111;
  border-radius: 0;
  box-shadow: 3px 3px 0 #111;
  transition: background 150ms ease, transform 100ms ease, box-shadow 100ms ease;
}

.brutal-input__field::placeholder {
  color: #999;
  font-weight: 400;
}

.brutal-input__field:hover {
  box-shadow: 4px 4px 0 #111;
}

.brutal-input__field:focus {
  background: #ffd02f;
  outline: none;
  box-shadow: 1px 1px 0 #111;
}

.brutal-input__field:focus-visible {
  outline: none;
  box-shadow: 1px 1px 0 #111;
}

.brutal-input__echo {
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 0.7rem;
  font-weight: 700;
  color: #2f7df6;
  letter-spacing: 0.05em;
}
</style>
