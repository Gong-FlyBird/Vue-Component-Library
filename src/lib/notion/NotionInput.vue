<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const focused = ref(false)
</script>

<template>
  <div class="stage">
    <div class="field" :class="{ 'is-focused': focused }">
      <label class="label" for="notion-title">Page title</label>
      <input
        id="notion-title"
        v-model="value"
        class="input"
        type="text"
        placeholder="Untitled"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #ffffff;
  padding: 3rem 2rem;
  box-sizing: border-box;
}
.field {
  position: relative;
  max-width: 360px;
  margin: 0 auto;
  padding-bottom: 2px;
}
.label {
  display: block;
  margin-bottom: 0.4rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 12px;
  color: #9b9a97;
  transition: color 0.2s ease;
}
.is-focused .label {
  color: #37352f;
}
.input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e3e3e0;
  border-radius: 0;
  background: transparent;
  padding: 0.5rem 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 15px;
  color: #37352f;
}
.input::placeholder {
  color: #9b9a97;
}
.input:focus {
  outline: none;
}
.field::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #2383e2;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s ease;
}
.is-focused::after {
  transform: scaleX(1);
}
</style>
