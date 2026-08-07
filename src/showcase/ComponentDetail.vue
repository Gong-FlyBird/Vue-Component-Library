<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, ArrowRight, Heart } from 'lucide-vue-next'
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
const groupIdx = computed(() => groups.findIndex((g) => g.id === group.value?.id))
const itemIdx = computed(() => group.value?.components.findIndex((c) => c.id === props.id) ?? 0)

const isFav = computed(() => favorites.value.has(props.id))

function fav() {
  toggleFavorite(props.id)
  pushToast(isFav.value ? '已取消收藏' : '已加入收藏', 'info')
}

const siblings = computed(() => {
  const list = group.value?.components ?? []
  const idx = list.findIndex((c) => c.id === props.id)
  return { prev: list[idx - 1], next: list[idx + 1] }
})

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div v-if="item && group" class="detail">
    <div class="crumb">
      <button class="back mono" @click="navigate({ name: 'home' })">← 返回目录</button>
      <span class="crumb-path mono">
        / {{ group.name }} / {{ item.name }}
      </span>
    </div>

    <div class="head">
      <div class="head-main">
        <p class="kicker">
          {{ String(groupIdx + 1).padStart(2, '0') }} · {{ group.en }} · {{ item.en }}
        </p>
        <h1 class="title serif">{{ item.name }}</h1>
        <p class="desc">{{ item.description }}</p>
      </div>
      <div class="head-side">
        <div class="tags">
          <span v-for="t in item.tags" :key="t" class="tag mono">{{ t }}</span>
        </div>
        <div class="actions">
          <button class="action mono" :class="{ active: isFav }" @click="fav">
            <Heart :size="13" :fill="isFav ? 'currentColor' : 'none'" />
            {{ isFav ? '已收藏' : '收藏' }}
          </button>
          <CopyBtn :text="item.raw" label="复制源码" />
        </div>
      </div>
    </div>

    <PreviewStage :group="group" :component="item.component" :index="itemIdx" @go-code="scrollTo('code-panel')" />

    <CodePanel :id="item.id" :name="item.name" :en="item.en" :raw="item.raw" @go-preview="scrollTo('preview-stage')" />

    <div class="pager">
      <button v-if="siblings.prev" class="pager-btn" @click="navigate({ name: 'component', id: siblings.prev!.id })">
        <ArrowLeft :size="15" />
        <span class="pager-text">
          <small class="kicker">上一个</small>
          <b class="serif">{{ siblings.prev.name }}</b>
        </span>
      </button>
      <span v-else />
      <button v-if="siblings.next" class="pager-btn next" @click="navigate({ name: 'component', id: siblings.next!.id })">
        <span class="pager-text">
          <small class="kicker">下一个</small>
          <b class="serif">{{ siblings.next.name }}</b>
        </span>
        <ArrowRight :size="15" />
      </button>
    </div>
  </div>
  <div v-else class="missing">
    <p>未找到该组件，<a class="accent" @click="navigate({ name: 'home' })">返回目录</a>。</p>
  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 880px;
  margin: 0 auto;
  padding-bottom: 80px;
}
.crumb {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 0 2px;
}
.back {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--ink-2);
  transition: all 0.15s ease;
  padding: 4px 0;
}
.back:hover {
  color: var(--accent);
  transform: translateX(-2px);
}
.crumb-path {
  font-size: 11px;
  color: var(--ink-3);
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  flex-wrap: wrap;
  padding-bottom: 26px;
  border-bottom: 1px solid var(--line-strong);
}
.head-main {
  max-width: 520px;
}
.title {
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.15;
  margin-top: 10px;
}
.desc {
  margin-top: 14px;
  font-size: 13.5px;
  line-height: 1.9;
  color: var(--ink-2);
}
.head-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
}
.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.tag {
  font-size: 10px;
  letter-spacing: 0.1em;
  padding: 3px 10px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink-2);
}
.actions {
  display: flex;
  gap: 8px;
}
.action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  letter-spacing: 0.08em;
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink-2);
  transition: all 0.18s ease;
}
.action:hover {
  border-color: var(--line-strong);
  color: var(--ink);
}
.action.active {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}
.pager {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid var(--line);
  padding-top: 18px;
}
.pager-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 4px;
  color: var(--ink-2);
  transition: all 0.2s ease;
}
.pager-btn:hover {
  color: var(--ink);
}
.pager-btn.next {
  margin-left: auto;
  text-align: right;
}
.pager-btn b {
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 2px;
}
.pager-btn small {
  font-size: 9.5px;
}
.missing {
  padding: 80px 0;
  text-align: center;
  color: var(--ink-2);
}
.missing a {
  cursor: pointer;
  text-decoration: underline;
}
</style>
