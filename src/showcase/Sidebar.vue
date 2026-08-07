<script setup lang="ts">
import { computed, ref } from 'vue'
import { Dices, Heart, Search, X } from 'lucide-vue-next'
import { groups, allComponents, ALL_TAGS } from '../lib'
import { favorites } from './composables/useFavorites'
import { navigate, useRoute } from './router'
import { rotatePreview } from './composables/previewKey'

const route = useRoute()
const query = ref('')
const tagFilter = ref('')
const showFavs = ref(false)
const searchInput = ref<HTMLInputElement>()

const normalized = computed(() => query.value.trim().toLowerCase())
const searchActive = computed(() => !!normalized.value || !!tagFilter.value || showFavs.value)

const matches = computed(() => {
  if (!searchActive.value) return []
  return allComponents.filter((c) => {
    if (tagFilter.value && !c.tags.includes(tagFilter.value)) return false
    if (showFavs.value && !favorites.value.has(c.id)) return false
    if (normalized.value) {
      const hay = `${c.name} ${c.en} ${c.description} ${c.groupName} ${c.tags.join(' ')}`.toLowerCase()
      if (!hay.includes(normalized.value)) return false
    }
    return true
  })
})

function open(id: string) {
  navigate({ name: 'component', id })
  rotatePreview()
}

function random() {
  const pool = matches.value.length ? matches.value : allComponents
  open(pool[Math.floor(Math.random() * pool.length)].id)
}

function toggleFavs() {
  showFavs.value = !showFavs.value
  tagFilter.value = ''
  query.value = ''
}

defineExpose({
  focusSearch: () => searchInput.value?.focus(),
})

const pad = (n: number) => String(n + 1).padStart(2, '0')
</script>

<template>
  <aside class="sidebar">
    <div class="search-wrap">
      <input
        ref="searchInput"
        v-model="query"
        class="search mono"
        type="text"
        placeholder="搜索组件…"
        spellcheck="false"
      />
      <button v-if="query" class="clear" @click="query = ''">
        <X :size="13" />
      </button>
      <Search v-else :size="13" class="search-icon" />
    </div>

    <div class="filters">
      <button
        class="filter mono"
        :class="{ active: showFavs }"
        @click="toggleFavs"
      >
        <Heart :size="12" :fill="showFavs ? 'currentColor' : 'none'" />
        收藏{{ favorites.size ? ` (${favorites.size})` : '' }}
      </button>
      <button class="filter mono" @click="random">
        <Dices :size="12" />
        随机
      </button>
    </div>

    <div class="tag-row">
      <button
        v-for="t in ALL_TAGS"
        :key="t"
        class="tag mono"
        :class="{ active: tagFilter === t }"
        @click="tagFilter = tagFilter === t ? '' : t"
      >
        {{ t }}
      </button>
    </div>

    <div class="index-head">
      <span class="kicker">目录</span>
      <span class="kicker mono">{{ matches.length }} 项</span>
    </div>

    <nav class="nav">
      <template v-if="searchActive">
        <button
          v-for="(c, i) in matches"
          :key="c.id"
          class="row"
          :class="{ active: route.name === 'component' && route.id === c.id }"
          @click="open(c.id)"
        >
          <span class="no mono">{{ pad(i) }}</span>
          <span class="name">{{ c.name }}</span>
          <span class="meta mono">{{ c.groupName }}</span>
        </button>
        <p v-if="!matches.length" class="empty">没有匹配的组件。</p>
      </template>

      <template v-else>
        <button
          v-for="(g, i) in groups"
          :key="g.id"
          class="row"
          :class="{ active: route.name === 'component' && route.id.startsWith(g.id + '-') }"
          @click="open(g.components[0].id)"
        >
          <span class="no mono">{{ pad(i) }}</span>
          <span class="name">{{ g.name }}</span>
          <span class="meta mono">{{ g.en }}</span>
          <span class="count mono">{{ g.components.length }}</span>
        </button>
      </template>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 14px;
  overflow-y: auto;
  height: 100%;
}
.search-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--line);
  padding: 8px 2px;
  transition: border-color 0.2s ease;
}
.search-wrap:focus-within {
  border-bottom-color: var(--ink);
}
.search {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink);
  font-size: 12.5px;
}
.search::placeholder {
  color: var(--ink-3);
}
.search-icon,
.clear {
  color: var(--ink-3);
  flex-shrink: 0;
  display: flex;
}
.clear:hover {
  color: var(--ink);
}
.filters {
  display: flex;
  gap: 6px;
}
.filter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  padding: 6px 10px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink-2);
  background: transparent;
  transition: all 0.18s ease;
}
.filter:hover {
  border-color: var(--line-strong);
  color: var(--ink);
}
.filter.active {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tag {
  font-size: 10px;
  letter-spacing: 0.06em;
  padding: 3px 9px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  color: var(--ink-3);
  transition: all 0.15s ease;
}
.tag:hover {
  color: var(--ink);
  border-color: var(--line-strong);
}
.tag.active {
  color: var(--bg);
  background: var(--ink);
  border-color: var(--ink);
}
.index-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 2px 4px;
  border-bottom: 1px solid var(--line-strong);
}
.nav {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 9px 4px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  transition: all 0.15s ease;
  position: relative;
}
.row:last-child {
  border-bottom: none;
}
.row:hover {
  background: var(--surface);
}
.row.active {
  background: var(--surface);
}
.row.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--accent);
}
.no {
  font-size: 10px;
  color: var(--ink-3);
  width: 20px;
  flex-shrink: 0;
}
.row:hover .no {
  color: var(--accent);
}
.name {
  font-family: var(--serif);
  font-size: 13.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.meta {
  font-size: 9px;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 92px;
}
.count {
  font-size: 10px;
  color: var(--ink-3);
}
.empty {
  font-size: 12px;
  color: var(--ink-3);
  padding: 24px 4px;
}
</style>
