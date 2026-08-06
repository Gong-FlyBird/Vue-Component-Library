<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

const text = ref('Write something…')
</script>

<template>
  <div class="stage">
    <div class="block">
      <span class="handle" aria-hidden="true">
        <span class="grip"></span>
        <span class="grip"></span>
        <span class="grip"></span>
        <span class="grip"></span>
      </span>
      <span class="hint" aria-hidden="true">/</span>
      <input v-model="text" class="content" type="text" placeholder="Type / for commands" />
      <div class="actions">
        <span class="more" aria-hidden="true">
          <span class="grip"></span>
          <span class="grip"></span>
          <span class="grip"></span>
        </span>
        <button type="button" class="x" aria-label="Delete block">
          <X :size="14" />
        </button>
      </div>
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
  display: flex;
  justify-content: center;
}
.block {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  width: 100%;
  max-width: 520px;
  padding: 0.5rem 0.55rem;
  border-radius: 4px;
  transition: background-color 0.15s ease;
}
.block:hover {
  background: #f7f7f5;
}
.handle {
  display: grid;
  grid-template-columns: repeat(2, 3px);
  gap: 3px;
  align-content: space-between;
  height: 12px;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.block:hover .handle {
  opacity: 1;
}
.grip {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #c8c6c0;
}
.hint {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 0.4rem;
  border-radius: 999px;
  background: #f1f1ef;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 12px;
  color: #9b9a97;
  opacity: 0;
  transform: translateX(-3px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.block:hover .hint {
  opacity: 1;
  transform: translateX(0);
}
.content {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  padding: 0.2rem 0.15rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  color: #37352f;
}
.content::placeholder {
  color: #9b9a97;
}
.content:focus {
  outline: none;
}
.actions {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.block:hover .actions {
  opacity: 1;
}
.more {
  display: flex;
  gap: 2.5px;
  padding: 3px;
}
.x {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #9b9a97;
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease;
}
.x:hover {
  color: #37352f;
  background: #ebebea;
}
</style>
