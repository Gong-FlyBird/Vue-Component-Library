<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-vue-next'
import { groups, componentMap } from '../lib'
import PreviewStage from './PreviewStage.vue'
import CodePanel from './CodePanel.vue'
import CopyBtn from './CopyBtn.vue'
import { favorites, toggleFavorite } from './composables/useFavorites'
import { pushToast } from './composables/useToast'
import { navigate } from './router'

const props = defineProps<{ id: string }>()

const item = computed(() => componentMap.get(props.id))
const group = computed(() => groups.find((g) => g.id === item.value?.groupId))

const isFav = computed(() => favorites.value.has(props.id))

function fav() {
  toggleFavorite(props.id)
  pushToast(isFav.value ? '已取消收藏' : '已加入收藏', 'info')
}

const siblings = computed(() => {
  const list = group.value?.components ?? []
  const idx = list.findIndex((c) => c.id === props.id)
  return {
    prev: list[idx - 1],
    next: list[idx + 1],
  }
})
</script>

<template>
  <div v-if="item && group" class="detail">
    <div class="crumb">
      <button class="crumb-link" @click="navigate({ name: 'home' })">组件库</button>
      <span class="sep">/</span>
      <span class="crumb-group">{{ group.name }}</span>
      <span class="sep">/</span>
      <span>{{ item.name }}</span>
    </div>

    <div class="head">
      <div>
        <h1 class="title">{{ item.name }}</h1>
        <div class="en">{{ item.en }}</div>
        <p class="desc">{{ item.description }}</p>
        <div class="tags">
          <span v-for="t in item.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
      <div class="head-actions">
        <button class="fav-btn" :class="{ active: isFav }" @click="fav">
          <Heart :size="16" :fill="isFav ? 'currentColor' : 'none'" />
          {{ isFav ? '已收藏' : '收藏' }}
        </button>
        <CopyBtn :text="item.raw" label="复制源码" :size="16" />
      </div>
    </div>

    <PreviewStage :group="group" :component="item.component" />

    <CodePanel :id="item.id" :name="item.name" :en="item.en" :raw="item.raw" />

    <div class="pager">
      <button
        v-if="siblings.prev"
        class="pager-btn prev"
        @click="navigate({ name: 'component', id: siblings.prev!.id })"
      >
        <ChevronLeft :size="16" />
        <span>
          <small>上一个</small>
          {{ siblings.prev.name }}
        </span>
      </button>
      <span v-else />
      <button
        v-if="siblings.next"
        class="pager-btn next"
        @click="navigate({ name: 'component', id: siblings.next!.id })"
      >
        <span>
          <small>下一个</small>
          {{ siblings.next.name }}
        </span>
        <ChevronRight :size="16" />
      </button>
    </div>
  </div>
  <div v-else class="missing">
    <p>未找到该组件，返回 <a @click="navigate({ name: 'home' })">组件库首页</a>。</p>
  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 40px;
}
.crumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: var(--text-3);
}
.crumb-link {
  color: var(--text-2);
  transition: color 0.15s;
}
.crumb-link:hover {
  color: var(--accent);
}
.sep {
  opacity: 0.5;
}
.crumb-group {
  color: var(--text-2);
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}
.title {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.en {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text-3);
  margin-top: 4px;
}
.desc {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-2);
  max-width: 520px;
}
.tags {
  display: flex;
  gap: 6px;
  margin-top: 12px;
  flex-wrap: wrap;
}
.tag {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  color: var(--text-2);
  background: var(--surface);
}
.head-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}
.fav-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--text-2);
  font-size: 12px;
  transition: all 0.18s ease;
}
.fav-btn:hover {
  border-color: #ff4d6d;
  color: #ff4d6d;
}
.fav-btn.active {
  color: #ff4d6d;
  border-color: rgba(255, 77, 109, 0.4);
  background: rgba(255, 77, 109, 0.08);
}
.pager {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 6px;
}
.pager-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 13px;
  transition: all 0.2s ease;
}
.pager-btn:hover {
  border-color: var(--border-strong);
  background: var(--surface-2);
  transform: translateY(-1px);
}
.pager-btn small {
  display: block;
  font-size: 10.5px;
  color: var(--text-3);
  margin-bottom: 2px;
}
.pager-btn.next {
  margin-left: auto;
}
.missing {
  padding: 60px 0;
  text-align: center;
  color: var(--text-2);
}
.missing a {
  color: var(--accent);
  cursor: pointer;
  text-decoration: underline;
}
</style>
