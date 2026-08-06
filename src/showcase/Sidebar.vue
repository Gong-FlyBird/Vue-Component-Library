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

const visibleGroups = computed(() => {
  if (searchActive.value) return []
  return groups.map((g) => ({ ...g, count: g.components.length }))
})

function open(id: string) {
  navigate({ name: 'component', id })
  rotatePreview()
}

function random() {
  const pool = matches.value.length ? matches.value : allComponents
  const pick = pool[Math.floor(Math.random() * pool.length)]
  open(pick.id)
}

function toggleFavs() {
  showFavs.value = !showFavs.value
  tagFilter.value = ''
  query.value = ''
}

defineExpose({
  focusSearch: () => searchInput.value?.focus(),
})
</script>

<template>
  <aside class="sidebar">
    <div class="search-wrap">
      <Search :size="15" class="search-icon" />
      <input
        ref="searchInput"
        v-model="query"
        class="search"
        type="text"
        placeholder="搜索组件…  ( Ctrl K )"
        spellcheck="false"
      />
      <button v-if="query" class="clear" @click="query = ''">
        <X :size="13" />
      </button>
      <kbd v-else class="kbd">⌘K</kbd>
    </div>

    <div class="chip-row">
      <button
        v-for="t in ALL_TAGS"
        :key="t"
        class="chip"
        :class="{ active: tagFilter === t }"
        @click="tagFilter = tagFilter === t ? '' : t"
      >
        {{ t }}
      </button>
    </div>

    <div class="side-actions">
      <button class="side-btn" :class="{ active: showFavs }" @click="toggleFavs">
        <Heart :size="14" :fill="showFavs ? 'currentColor' : 'none'" />
        收藏
        <span v-if="favorites.size" class="fav-count">{{ favorites.size }}</span>
      </button>
      <button class="side-btn" @click="random">
        <Dices :size="14" />
        随机逛逛
      </button>
    </div>

    <nav class="nav">
      <template v-if="searchActive">
        <div class="nav-hint">{{ matches.length }} 个结果</div>
        <button
          v-for="c in matches"
          :key="c.id"
          class="item"
          :class="{ active: route.name === 'component' && route.id === c.id }"
          @click="open(c.id)"
        >
          <span class="item-dot" :style="{ background: 'var(--grad-brand)' }" />
          <span class="item-name">{{ c.name }}</span>
          <small class="item-group">{{ c.groupName }}</small>
        </button>
        <p v-if="!matches.length" class="empty">没有匹配的组件，换个关键词试试。</p>
      </template>

      <template v-else>
        <button
          v-for="g in visibleGroups"
          :key="g.id"
          class="group-item"
          :class="{ open: route.name === 'component' && route.id.startsWith(g.id + '-') }"
          @click="open(g.components[0].id)"
        >
          <span class="group-dot" :style="{ background: g.gradient }" />
          <span class="group-name">{{ g.name }}</span>
          <small class="group-en">{{ g.en }}</small>
          <span class="group-count">{{ g.count }}</span>
        </button>
      </template>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 14px;
  overflow-y: auto;
  height: 100%;
}
.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 11px;
  border: 1px solid var(--border);
  background: var(--surface);
  transition: all 0.2s ease;
}
.search-wrap:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.18);
}
.search-icon {
  color: var(--text-3);
  flex-shrink: 0;
}
.search {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 13px;
}
.search::placeholder {
  color: var(--text-3);
}
.clear {
  color: var(--text-3);
  display: flex;
  padding: 2px;
}
.clear:hover {
  color: var(--text);
}
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.chip {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-2);
  background: var(--surface);
  transition: all 0.15s ease;
}
.chip:hover {
  border-color: var(--border-strong);
  color: var(--text);
}
.chip.active {
  background: var(--grad-brand);
  color: #fff;
  border-color: transparent;
}
.side-actions {
  display: flex;
  gap: 6px;
}
.side-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-2);
  transition: all 0.18s ease;
}
.side-btn:hover {
  color: var(--text);
  border-color: var(--border-strong);
}
.side-btn.active {
  color: #ff4d6d;
  border-color: rgba(255, 77, 109, 0.4);
}
.fav-count {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 999px;
  background: rgba(255, 77, 109, 0.15);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
}
.nav-hint {
  font-size: 11px;
  color: var(--text-3);
  padding: 6px 8px;
  letter-spacing: 0.5px;
}
.item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 9px;
  font-size: 12.5px;
  color: var(--text-2);
  text-align: left;
  transition: all 0.15s ease;
}
.item:hover {
  background: var(--surface);
  color: var(--text);
}
.item.active {
  background: var(--surface-2);
  color: var(--text);
}
.item-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.item-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-group {
  font-size: 10px;
  color: var(--text-3);
  flex-shrink: 0;
}
.group-item {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--text-2);
  text-align: left;
  transition: all 0.15s ease;
}
.group-item:hover {
  background: var(--surface);
  color: var(--text);
}
.group-item.open {
  background: var(--surface-2);
  color: var(--text);
}
.group-dot {
  width: 8px;
  height: 8px;
  border-radius: 3px;
  flex-shrink: 0;
}
.group-name {
  font-size: 13px;
  font-weight: 500;
}
.group-en {
  flex: 1;
  font-size: 10px;
  color: var(--text-3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.group-count {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--text-3);
  background: var(--surface-2);
  padding: 1px 7px;
  border-radius: 999px;
}
.empty {
  font-size: 12.5px;
  color: var(--text-3);
  padding: 18px 10px;
  text-align: center;
  line-height: 1.7;
}
</style>
