<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  {
    placeholder: 'type a command…',
  },
)

const value = ref('')
const focused = ref(false)
</script>

<template>
  <div class="term-input" :class="{ 'term-input--on': focused }">
    <span class="term-input__prompt" aria-hidden="true">$</span>

    <div class="term-input__field">
      <span class="term-input__ghost" aria-hidden="true">{{ value }}</span>
      <span v-if="!value" class="term-input__placeholder" aria-hidden="true">
        {{ props.placeholder }}
      </span>
      <span class="term-input__cursor" aria-hidden="true"></span>
      <input
        v-model="value"
        class="term-input__native"
        type="text"
        spellcheck="false"
        autocomplete="off"
        :aria-label="props.placeholder"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>
  </div>
</template>

<style scoped>
.term-input {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  max-width: 100%;
  padding: 0.6rem 0.85rem;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.85rem;
  color: #33ff66;
  background: rgba(51, 255, 102, 0.04);
  border: 1px solid rgba(51, 255, 102, 0.35);
  border-radius: 4px;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease,
    background 150ms ease;
}

.term-input--on {
  background: rgba(51, 255, 102, 0.07);
  border-color: rgba(51, 255, 102, 0.85);
  box-shadow:
    0 0 16px rgba(51, 255, 102, 0.22),
    inset 0 0 12px rgba(51, 255, 102, 0.06);
}

.term-input__prompt {
  color: #33ff66;
  text-shadow: 0 0 7px rgba(51, 255, 102, 0.8);
  user-select: none;
}

.term-input__field {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  height: 1.35em;
}

.term-input__ghost {
  white-space: pre;
  visibility: hidden;
}

.term-input__placeholder {
  position: absolute;
  left: 0;
  color: rgba(92, 103, 112, 0.55);
  pointer-events: none;
}

.term-input__cursor {
  width: 0.58em;
  height: 1.2em;
  margin-left: 1px;
  background: #33ff66;
  box-shadow: 0 0 8px rgba(51, 255, 102, 0.8);
  opacity: 0;
  transition: opacity 150ms ease;
}

.term-input--on .term-input__cursor {
  opacity: 1;
  animation: term-input-blink 1s steps(2, start) infinite;
}

@keyframes term-input-blink {
  to {
    opacity: 0;
  }
}

.term-input__native {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font: inherit;
  color: transparent;
  background: transparent;
  border: none;
  outline: none;
  caret-color: transparent;
  opacity: 0;
  cursor: text;
}
</style>
