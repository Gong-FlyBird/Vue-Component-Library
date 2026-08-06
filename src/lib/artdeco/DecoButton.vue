<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: 'ENTER THE AGE',
})
</script>

<template>
  <button class="deco-button" type="button">
    <span class="deco-button__bracket deco-button__bracket--tl" aria-hidden="true"></span>
    <span class="deco-button__bracket deco-button__bracket--tr" aria-hidden="true"></span>
    <span class="deco-button__bracket deco-button__bracket--bl" aria-hidden="true"></span>
    <span class="deco-button__bracket deco-button__bracket--br" aria-hidden="true"></span>
    <span class="deco-button__shine" aria-hidden="true"></span>
    <span class="deco-button__label"><slot>{{ label }}</slot></span>
  </button>
</template>

<style scoped>
.deco-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2.6rem;
  font-family: 'Didot', Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #e8d9a8;
  background: #10131f;
  border: 1px solid #d4af37;
  outline: 2px solid #d4af37;
  outline-offset: -5px;
  cursor: pointer;
  overflow: hidden;
  transition: background 250ms ease, color 250ms ease;
}

.deco-button:hover {
  background: #171b2c;
  color: #f5ecd7;
}

.deco-button:active {
  background: #0a0c15;
  color: #b99b3a;
}

.deco-button:focus-visible {
  outline: 3px dashed #d4af37;
  outline-offset: 4px;
}

.deco-button__label {
  position: relative;
  z-index: 1;
}

.deco-button__bracket {
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  border: 1px solid #d4af37;
  z-index: 1;
  transition: border-color 250ms ease;
}

.deco-button__bracket--tl { top: 0.35rem; left: 0.35rem; border-right: none; border-bottom: none; }
.deco-button__bracket--tr { top: 0.35rem; right: 0.35rem; border-left: none; border-bottom: none; }
.deco-button__bracket--bl { bottom: 0.35rem; left: 0.35rem; border-right: none; border-top: none; }
.deco-button__bracket--br { bottom: 0.35rem; right: 0.35rem; border-left: none; border-top: none; }

.deco-button__shine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -60%;
  width: 45%;
  background: linear-gradient(105deg, transparent, rgba(212, 175, 55, 0.35), transparent);
  transform: skewX(-20deg);
  transition: left 500ms ease;
}

.deco-button:hover .deco-button__shine {
  left: 120%;
}
</style>
