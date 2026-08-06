<script setup lang="ts">
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'

const todos = ref([
  { text: 'Draft the outline', done: false },
  { text: 'Collect field notes', done: false },
  { text: 'Review with June', done: true }
])
</script>

<template>
  <div class="stage">
    <article class="page">
      <header class="title-row">
        <span class="emoji" aria-hidden="true">🍃</span>
        <div class="title-wrap">
          <h2 class="title">Research · Ch. 3</h2>
          <p class="meta">Updated 2h ago · 4 collaborators</p>
        </div>
        <div class="avatars" aria-hidden="true">
          <span class="avatar av--1">J</span>
          <span class="avatar av--2">M</span>
          <span class="avatar av--3">K</span>
        </div>
      </header>
      <div class="blocks">
        <button
          v-for="(t, i) in todos"
          :key="i"
          type="button"
          class="block block--todo"
          @click="t.done = !t.done"
        >
          <span class="check" :class="{ 'is-checked': t.done }">
            <Check v-if="t.done" :size="11" :stroke-width="3" />
          </span>
          <span class="txt" :class="{ 'is-done': t.done }">{{ t.text }}</span>
        </button>
        <div class="block block--bullet">
          <span class="bullet-dot" aria-hidden="true"></span>
          <span class="txt">Round of interviews scheduled for Friday</span>
        </div>
        <div class="block block--quote">
          <span class="txt txt--quote">“Simplicity is the residue of design.”</span>
        </div>
      </div>
    </article>
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
.page {
  background: #fff;
  border: 1px solid #e9e9e7;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(55, 53, 47, 0.06);
  padding: 1.6rem 1.7rem;
}
.title-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding-bottom: 1.1rem;
  border-bottom: 1px solid #f0f0ee;
}
.emoji {
  font-size: 1.4rem;
  line-height: 1;
}
.title-wrap {
  flex: 1;
  min-width: 0;
}
.title {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #37352f;
}
.meta {
  margin: 0.3rem 0 0;
  font-size: 12px;
  color: #9b9a97;
}
.avatars {
  display: flex;
  padding-top: 0.2rem;
}
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: -5px;
  border-radius: 50%;
  border: 2px solid #fff;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 9px;
  font-weight: 600;
  color: #fff;
}
.av--1 {
  margin-left: 0;
  background: #c97d5c;
}
.av--2 {
  background: #5c97c9;
}
.av--3 {
  background: #8f9e5c;
}
.blocks {
  padding-top: 0.4rem;
}
.block {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  width: 100%;
  padding: 0.5rem 0.5rem;
  border: none;
  border-bottom: 1px solid #f4f4f2;
  border-radius: 4px;
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.block:hover {
  background: #f7f7f5;
}
.block--todo {
  font-family: inherit;
}
.check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  margin-top: 1px;
  flex-shrink: 0;
  border: 1.5px solid #d3d1cb;
  border-radius: 3.5px;
  background: #fff;
  color: #fff;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.check.is-checked {
  background: #2383e2;
  border-color: #2383e2;
}
.txt {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #37352f;
}
.txt.is-done {
  color: #9b9a97;
  text-decoration: line-through;
}
.bullet-dot {
  width: 7px;
  height: 7px;
  margin-top: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #9b9a97;
}
.block--quote {
  cursor: default;
  border-left: 3px solid #37352f;
  border-radius: 0 4px 4px 0;
  padding-left: 0.85rem;
}
.txt--quote {
  font-family: Georgia, 'Songti SC', serif;
  font-style: italic;
  font-size: 15px;
}
</style>
