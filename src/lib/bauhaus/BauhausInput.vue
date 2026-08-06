<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  label?: string
  placeholder?: string
}>(), {
  label: 'NAME',
  placeholder: 'walter gropius',
})

const value = ref('')
</script>

<template>
  <label class="bauhaus-input">
    <span class="bauhaus-input__label">{{ label }}</span>
    <input
      v-model="value"
      class="bauhaus-input__field"
      type="text"
      :placeholder="placeholder"
    />
  </label>
</template>

<style scoped>
.bauhaus-input {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  max-width: 100%;
}

.bauhaus-input__label {
  font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 900;
  font-size: 0.78rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #151515;
}

.bauhaus-input__field {
  padding: 0.7rem 0.2rem;
  font-family: 'Helvetica Neue', Arial, -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: #151515;
  background: transparent;
  border: none;
  border-bottom: 3px solid #151515;
  border-radius: 0;
  transition: border-color 200ms ease, background 200ms ease;
}

.bauhaus-input__field::placeholder {
  color: #b5ad9e;
  font-weight: 400;
}

.bauhaus-input__field:hover {
  border-bottom-color: #1d3f8f;
}

.bauhaus-input__field:focus {
  outline: none;
  border-bottom-color: #e03a3e;
}

.bauhaus-input__field:focus-visible {
  outline: none;
  border-bottom-color: #e03a3e;
}
</style>
