<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const focused = ref(false)
</script>

<template>
  <div class="stage">
    <div class="field" :class="{ 'is-focused': focused }">
      <label class="label" for="muji-name">Your name</label>
      <input
        id="muji-name"
        v-model="value"
        class="input"
        type="text"
        placeholder="Kōbō Abe"
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
  background: #f7f5ef;
  padding: 3rem 2rem;
  box-sizing: border-box;
}
.field {
  max-width: 340px;
  margin: 0 auto;
}
.label {
  display: block;
  margin-bottom: 0.55rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8c8577;
  transition: color 0.3s ease;
}
.is-focused .label {
  color: #3d3a34;
}
.input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #d8d2c4;
  border-radius: 0;
  background: transparent;
  padding: 0.55rem 0.15rem;
  font-family: 'Songti SC', 'Noto Serif SC', Georgia, serif;
  font-size: 1rem;
  color: #3d3a34;
  box-shadow: 0 0 0 #3d3a34;
  transition: box-shadow 0.3s ease;
}
.input::placeholder {
  color: #b3ac9e;
}
.input:focus {
  outline: none;
}
.is-focused .input {
  box-shadow: 0 -2px 0 #3d3a34;
}
</style>
