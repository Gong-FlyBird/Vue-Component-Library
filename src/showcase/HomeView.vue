<script setup lang="ts">
import { computed } from 'vue'
import { Heart } from 'lucide-vue-next'
import { groups, totalCount, allComponents } from '../lib'
import { favorites } from './composables/useFavorites'
import { navigate } from './router'

const featured = [
  { group: groups[0], idx: 1 },  // GlassCard
  { group: groups[1], idx: 1 },  // HermesCard
  { group: groups[2], idx: 1 },  // NeonCard
]

const favList = computed(() => allComponents.filter((c) => favorites.value.has(c.id)))
const pad = (n: number) => String(n + 1).padStart(2, '0')

function open(id: string) {
  navigate({ name: 'component', id })
}
</script>

<template>
  <div class="home">
    <section class="hero">
      <p class="kicker hero-kicker">ATELIER UI — COMPONENT ARCHIVE / 2026</p>
      <h1 class="hero-title">
        高级审美<br />
        <em>组件档案馆</em>
      </h1>
      <div class="hero-bottom">
        <p class="hero-desc">
          从 Apple 液态玻璃到 Hermès 皮革，从赛博霓虹到日式侘寂。
          18 种世界级设计美学，92 个可直接复制的 Vue 3 组件 ——
          实时预览，点击复制，即刻入驻你的项目。
        </p>
        <div class="hero-stats mono">
          <div class="stat"><b>{{ totalCount }}</b><span>组件</span></div>
          <div class="stat"><b>18</b><span>美学</span></div>
          <div class="stat"><b>1</b><span>次点击复制</span></div>
        </div>
      </div>
    </section>

    <section class="featured">
      <div class="section-head">
        <span class="kicker">精选 — SELECTED</span>
      </div>
      <div class="featured-grid">
        <article v-for="(f, i) in featured" :key="f.group.id" class="feature-card">
          <button
            class="preview"
            :style="{ background: f.group.previewBg }"
            @click="open(f.group.components[f.idx].id)"
          >
            <component :is="f.group.components[f.idx].component" class="demo" />
            <span class="corner mono">{{ pad(i) }}</span>
          </button>
          <footer class="feature-foot">
            <div>
              <span class="kicker">{{ f.group.name }}</span>
              <h3 class="serif">{{ f.group.components[f.idx].name }}</h3>
            </div>
            <span class="arrow mono">→</span>
          </footer>
        </article>
      </div>
    </section>

    <section v-if="favList.length" class="favs">
      <div class="section-head">
        <span class="kicker"><Heart :size="11" style="display: inline; vertical-align: -1px" /> 我的收藏</span>
      </div>
      <div class="fav-chips">
        <button v-for="f in favList" :key="f.id" class="fav-chip" @click="open(f.id)">
          {{ f.name }} <span class="mono">{{ f.groupName }}</span>
        </button>
      </div>
    </section>

    <section class="index">
      <div class="section-head">
        <span class="kicker">目录 — INDEX</span>
        <span class="kicker mono">18 美学 · 92 组件</span>
      </div>
      <div class="index-list">
        <button v-for="(g, i) in groups" :key="g.id" class="index-row" @click="open(g.components[0].id)">
          <span class="no mono">{{ pad(i) }}</span>
          <span class="cn">{{ g.name }}</span>
          <span class="en mono">{{ g.en }}</span>
          <span class="tagline">{{ g.tagline }}</span>
          <span class="cnt mono">{{ g.components.length }}</span>
          <span class="arrow mono">→</span>
        </button>
      </div>
    </section>

    <footer class="foot">
      <span class="kicker">VUE 3 · TYPESCRIPT · 手工打磨 · 组件源码一键复制</span>
    </footer>
  </div>
</template>

<style scoped>
.home {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 0 80px;
}
.hero {
  padding: 88px 0 72px;
  border-bottom: 1px solid var(--line-strong);
}
.hero-kicker {
  margin-bottom: 28px;
}
.hero-title {
  font-family: var(--serif);
  font-size: clamp(52px, 9vw, 104px);
  line-height: 1.08;
  letter-spacing: 0.01em;
  font-weight: 600;
}
.hero-title em {
  font-style: normal;
  color: var(--accent);
}
.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-top: 48px;
  flex-wrap: wrap;
}
.hero-desc {
  max-width: 480px;
  font-size: 14px;
  line-height: 2;
  color: var(--ink-2);
}
.hero-stats {
  display: flex;
  gap: 36px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.stat b {
  font-size: 22px;
  font-weight: 500;
  color: var(--ink);
}
.stat span {
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 20px 0 14px;
  border-bottom: 1px solid var(--line-strong);
}
.featured {
  padding-top: 24px;
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 18px;
}
.feature-card {
  display: flex;
  flex-direction: column;
}
.preview {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  aspect-ratio: 4 / 3.2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px 20px;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.feature-card:hover .preview {
  border-color: var(--ink);
  transform: translateY(-3px);
}
.demo {
  width: 100%;
  pointer-events: none;
}
.corner {
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.65);
  mix-blend-mode: difference;
}
.feature-foot {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 12px 2px 0;
}
.serif {
  font-family: var(--serif);
  font-size: 16px;
  font-weight: 600;
  margin-top: 3px;
}
.arrow {
  font-size: 14px;
  color: var(--ink-3);
  transition: all 0.2s ease;
}
.feature-card:hover .arrow {
  color: var(--accent);
  transform: translateX(4px);
}

.favs {
  padding-top: 8px;
}
.fav-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 14px;
}
.fav-chip {
  font-family: var(--serif);
  font-size: 13px;
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  transition: all 0.18s ease;
}
.fav-chip:hover {
  border-color: var(--accent);
  color: var(--accent);
}
.fav-chip span {
  font-size: 9px;
  color: var(--ink-3);
  letter-spacing: 0.1em;
  margin-left: 6px;
}

.index-list {
  border-bottom: 1px solid var(--line-strong);
}
.index-row {
  width: 100%;
  display: grid;
  grid-template-columns: 44px 140px 1fr 2fr 40px 24px;
  align-items: baseline;
  gap: 14px;
  padding: 15px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  transition: all 0.2s ease;
}
.index-row:last-child {
  border-bottom: none;
}
.index-row:hover {
  background: var(--ink);
  color: var(--bg);
  padding-left: 18px;
}
.index-row:hover .no,
.index-row:hover .en,
.index-row:hover .tagline,
.index-row:hover .cnt {
  color: var(--ink-3);
}
.no {
  font-size: 11px;
  color: var(--ink-3);
  transition: color 0.2s ease;
}
.cn {
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.03em;
}
.en {
  font-size: 9.5px;
  letter-spacing: 0.16em;
  color: var(--ink-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
}
.tagline {
  font-size: 12px;
  color: var(--ink-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
}
.cnt {
  font-size: 11px;
  color: var(--ink-2);
  text-align: right;
  transition: color 0.2s ease;
}
.arrow {
  text-align: right;
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.2s ease;
}
.index-row:hover .arrow {
  opacity: 1;
  transform: translateX(0);
}

.foot {
  padding: 40px 0 8px;
  text-align: center;
}

@media (max-width: 900px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
  .index-row {
    grid-template-columns: 34px 110px 1fr 34px 20px;
  }
  .index-row .en {
    display: none;
  }
  .index-row .tagline {
    grid-column: 3 / 5;
    grid-row: 2;
    padding-top: 4px;
  }
  .hero {
    padding: 56px 0 48px;
  }
}
</style>
