<script setup lang="ts">
import { ref } from 'vue'

const model = defineModel<string>({ default: '' })
const focused = ref(false)
</script>

<template>
  <div class="neon-input">
    <label class="neon-input__label" for="neon-input-field">access.code</label>

    <div class="neon-input__wrap" :class="{ 'neon-input__wrap--on': focused }">
      <span class="neon-input__prompt" aria-hidden="true">›</span>
      <input
        id="neon-input-field"
        v-model="model"
        class="neon-input__field"
        type="text"
        spellcheck="false"
        autocomplete="off"
        placeholder="// enter access key…"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>

    <span class="neon-input__hint">clearance: maximum</span>
  </div>
</template>

<style scoped>
.neon-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 100%;
}

.neon-input__label {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #6a5bff;
  text-shadow: 0 0 8px rgba(106, 91, 255, 0.55);
}

.neon-input__wrap {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.62rem 0.8rem;
  background: rgba(5, 8, 16, 0.85);
  border: 1px solid rgba(0, 240, 255, 0.14);
  border-bottom: 1px solid rgba(0, 240, 255, 0.45);
  border-radius: 6px;
  transition:
    border-color 250ms ease,
    box-shadow 250ms ease,
    background 250ms ease;
}

.neon-input__wrap--on {
  background: rgba(5, 8, 16, 0.95);
  border-bottom-color: #00f0ff;
  box-shadow:
    0 10px 26px rgba(0, 240, 255, 0.16),
    0 1px 0 #00f0ff,
    inset 0 0 14px rgba(0, 240, 255, 0.07);
}

.neon-input__prompt {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.9rem;
  color: #00f0ff;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.8);
}

.neon-input__field {
  flex: 1;
  min-width: 0;
  padding: 0;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.85rem;
  color: #d9faff;
  background: transparent;
  border: none;
  outline: none;
  caret-color: #00f0ff;
}

.neon-input__field::placeholder {
  color: rgba(96, 130, 150, 0.5);
}

.neon-input__hint {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(0, 240, 255, 0.4);
}
</style>
