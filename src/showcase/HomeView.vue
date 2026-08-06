<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUpRight, Heart, Sparkles } from 'lucide-vue-next'
import { groups, totalCount, allComponents } from '../lib'
import { favorites } from './composables/useFavorites'
import { navigate } from './router'

const favList = computed(() => allComponents.filter((c) => favorites.value.has(c.id)))
const featured = [groups[0], groups[1], groups[6], groups[2], groups[15], groups[12]]

function openComponent(id: string) {
  navigate({ name: 'component', id })
}
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-badge"><Sparkles :size="13" /> 18 种设计美学 · {{ totalCount }} 个组件</div>
      <h1 class="hero-title">
        <span class="grad-text">Atelier</span> UI
      </h1>
      <p class="hero-sub">
        一个拥有高级审美气质的 Vue 3 组件库 —— 从苹果液态玻璃到爱马仕皮革，从赛博霓虹到日式侘寂。
        <br />实时预览，点击即复制，直接放进你的项目。
      </p>
      <div class="hero-stats">
        <div class="stat"><b>{{ totalCount }}</b><span>组件</span></div>
        <div class="stat"><b>18</b><span>美学风格</span></div>
        <div class="stat"><b>1</b><span>次点击复制</span></div>
      </div>
    </section>

    <section v-if="favList.length" class="fav-row">
      <div class="row-head">
        <h2><Heart :size="16" fill="currentColor" /> 我的收藏</h2>
      </div>
      <div class="fav-chips">
        <button v-for="f in favList" :key="f.id" class="fav-chip" @click="openComponent(f.id)">
          <span class="dot" :style="{ background: 'var(--grad-brand)' }" />
          {{ f.name }}
          <small>{{ f.groupName }}</small>
        </button>
      </div>
    </section>

    <section class="featured">
      <div class="row-head">
        <h2>精选推荐</h2>
      </div>
      <div class="featured-grid">
        <button
          v-for="g in featured"
          :key="g.id"
          class="featured-card"
          @click="openComponent(g.components[0].id)"
        >
          <div class="featured-cover" :style="{ background: g.previewBg }">
            <div class="swatch" :style="{ background: g.gradient }" />
            <div class="cover-glow" :style="{ background: g.gradient }" />
          </div>
          <div class="featured-info">
            <div>
              <b>{{ g.name }}</b>
              <small>{{ g.en }}</small>
            </div>
            <span class="count">{{ g.components.length }}</span>
          </div>
        </button>
      </div>
    </section>

    <section class="groups">
      <div class="row-head">
        <h2>全部风格</h2>
      </div>
      <div class="groups-grid">
        <button v-for="g in groups" :key="g.id" class="group-card" @click="openComponent(g.components[0].id)">
          <div class="group-top" :style="{ background: g.gradient }">
            <span class="group-en">{{ g.en }}</span>
            <ArrowUpRight :size="16" class="arrow" />
          </div>
          <div class="group-body">
            <div class="group-title-row">
              <b>{{ g.name }}</b>
              <span class="count">{{ g.components.length }}</span>
            </div>
            <p>{{ g.tagline }}</p>
            <div class="group-tags">
              <span v-for="c in g.components.slice(0, 4)" :key="c.id">{{ c.name }}</span>
            </div>
          </div>
        </button>
      </div>
    </section>

    <footer class="foot">
      <p>Atelier UI · 用 Vue 3 + TypeScript 手工打磨 · 组件源码一键复制</p>
    </footer>
  </div>
</template>

<style scoped>
.home {
  max-width: 1060px;
  margin: 0 auto;
  padding: 24px 0 60px;
}
.hero {
  text-align: center;
  padding: 46px 0 40px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  color: var(--text-2);
  margin-bottom: 22px;
}
.hero-badge svg {
  color: var(--accent-2);
}
.hero-title {
  font-size: clamp(44px, 8vw, 84px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
}
.hero-sub {
  margin: 18px auto 0;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-2);
}
.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.stat b {
  font-size: 26px;
  font-weight: 700;
  background: var(--grad-brand);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat span {
  font-size: 11.5px;
  color: var(--text-3);
  letter-spacing: 1px;
}
.row-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.row-head h2 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 700;
}
.row-head h2 svg {
  color: #ff4d6d;
}
.fav-row {
  margin-bottom: 36px;
}
.fav-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.fav-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 77, 109, 0.35);
  background: rgba(255, 77, 109, 0.07);
  font-size: 12.5px;
  transition: all 0.18s ease;
}
.fav-chip:hover {
  border-color: #ff4d6d;
  transform: translateY(-1px);
}
.fav-chip .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.fav-chip small {
  color: var(--text-3);
  font-size: 10.5px;
}
.featured {
  margin-bottom: 44px;
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 14px;
}
.featured-card {
  text-align: left;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  transition: all 0.22s ease;
}
.featured-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-lg);
}
.featured-cover {
  position: relative;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.swatch {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 3px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
.cover-glow {
  position: absolute;
  inset: -40%;
  opacity: 0.25;
  filter: blur(40px);
  z-index: -1;
}
.featured-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
}
.featured-info b {
  font-size: 14px;
  display: block;
}
.featured-info small {
  font-size: 10.5px;
  color: var(--text-3);
}
.count {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-3);
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
}
.groups-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}
.group-card {
  text-align: left;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  transition: all 0.22s ease;
}
.group-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow-lg);
}
.group-top {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 12px;
  color: rgba(255, 255, 255, 0.9);
}
.group-en {
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0.9;
}
.arrow {
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: all 0.22s ease;
}
.group-card:hover .arrow {
  opacity: 1;
  transform: translate(0, 0);
}
.group-body {
  padding: 12px 14px 14px;
}
.group-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-title-row b {
  font-size: 15px;
}
.group-body p {
  margin-top: 6px;
  font-size: 12px;
  color: var(--text-2);
}
.group-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}
.group-tags span {
  font-size: 10.5px;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--surface-2);
  color: var(--text-3);
}
.foot {
  text-align: center;
  margin-top: 60px;
  font-size: 12px;
  color: var(--text-3);
}
</style>
