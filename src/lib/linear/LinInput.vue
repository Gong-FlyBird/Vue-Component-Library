<script setup lang="ts">
import { ref } from 'vue'

const model = defineModel<string>({ default: '' })
const focused = ref(false)
</script>

<template>
  <div class="lin-input">
    <label class="lin-input__label" for="lin-input-field">Email address</label>

    <input
      id="lin-input-field"
      v-model="model"
      class="lin-input__field"
      :class="{ 'lin-input__field--on': focused }"
      type="email"
      placeholder="you@example.com"
      @focus="focused = true"
      @blur="focused = false"
    />

    <span class="lin-input__hint">We'll never share your address.</span>
  </div>
</template>

<style scoped>
.lin-input {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  max-width: 100%;
}

.lin-input__label {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #9b9ea6;
}

.lin-input__field {
  padding: 0.6rem 0.8rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.85rem;
  color: #f5f5f7;
  background: #101114;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  outline: none;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    background 150ms ease;
}

.lin-input__field::placeholder {
  color: #565a63;
}

.lin-input__field--on {
  background: #121318;
  border-color: #5e6ad2;
  box-shadow: 0 0 0 3px rgba(94, 106, 210, 0.25);
}

.lin-input__hint {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.7rem;
  color: #757983;
}
</style>
