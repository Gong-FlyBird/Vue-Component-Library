<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    type?: string
    placeholder?: string
  }>(),
  {
    label: 'E-mail',
    type: 'text',
    placeholder: 'guest@atelier.com',
  },
)

const value = ref('')
</script>

<template>
  <label class="hermes-input">
    <span class="hermes-input__label">{{ props.label }}</span>
    <input
      class="hermes-input__field"
      :type="props.type"
      :placeholder="props.placeholder"
      v-model="value"
    />
  </label>
</template>

<style scoped>
.hermes-input {
  display: block;
  width: 100%;
}

.hermes-input__label {
  display: block;
  margin-bottom: 0.5rem;
  color: #6f4e33;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-variant: small-caps;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.66rem;
}

.hermes-input__field {
  width: 100%;
  padding: 0.78rem 1rem;
  border-radius: 6px;
  border: 1px solid rgba(38, 22, 10, 0.55);
  border-bottom: 2px solid #b9924f;
  background: linear-gradient(180deg, #6f4e33, #5c3f28);
  color: #f6efdf;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  caret-color: #f6efdf;
  outline: none;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 6px 14px rgba(74, 47, 22, 0.18);
  transition:
    border-color 300ms ease,
    box-shadow 300ms ease,
    background 300ms ease;
}

.hermes-input__field::placeholder {
  color: rgba(246, 239, 223, 0.4);
}

.hermes-input__field:focus {
  border-bottom-color: #e0b860;
  background: linear-gradient(180deg, #7a563a, #644530);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 10px 26px rgba(185, 146, 79, 0.4);
}

.hermes-input__field:focus-visible {
  outline: 2px solid #d96f1d;
  outline-offset: 2px;
}
</style>
