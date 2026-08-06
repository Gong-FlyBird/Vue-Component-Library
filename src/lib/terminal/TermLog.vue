<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

type Level = 'ok' | 'warn' | 'err'

interface Entry {
  id: number
  level: Level
  text: string
}

const seed: Array<Pick<Entry, 'level' | 'text'>> = [
  { level: 'ok', text: 'handshake established on port 2200' },
  { level: 'ok', text: 'index rebuilt — 12,408 rows' },
  { level: 'warn', text: 'latency spike 342ms on mesh-3' },
  { level: 'ok', text: 'cache warmed (4.2 MB)' },
  { level: 'err', text: 'packet 0x9F lost — retrying' },
  { level: 'warn', text: 'swap usage at 78%' },
  { level: 'ok', text: 'checksum verified — clean' },
]

const box = ref<HTMLElement | null>(null)
const entries = ref<Entry[]>(seed.slice(0, 3).map((s, i) => ({ id: i, ...s })))
let seedCursor = 3
let nextId = 3
let timer: number | undefined

function appendEntry() {
  const src = seed[seedCursor % seed.length]
  entries.value.push({ id: nextId, level: src.level, text: src.text })
  seedCursor += 1
  nextId += 1
  if (entries.value.length > 24) {
    entries.value.splice(0, entries.value.length - 24)
  }
  void nextTick(() => {
    if (box.value) box.value.scrollTop = box.value.scrollHeight
  })
}

onMounted(() => {
  timer = window.setInterval(appendEntry, 1100)
})

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearInterval(timer)
})

function prefixOf(level: Level): string {
  if (level === 'ok') return '[OK]'
  if (level === 'warn') return '[WARN]'
  return '[ERR]'
}
</script>

<template>
  <div class="term-log">
    <div class="term-log__head">
      <span class="term-log__title">system.log</span>
      <span class="term-log__live" aria-hidden="true">● live</span>
    </div>

    <div ref="box" class="term-log__box" role="log" aria-live="polite">
      <p
        v-for="entry in entries"
        :key="entry.id"
        class="term-log__line"
        :class="`term-log__line--${entry.level}`"
      >
        <span class="term-log__time">{{ String(entry.id).padStart(3, '0') }}</span>
        <span class="term-log__prefix">{{ prefixOf(entry.level) }}</span>
        <span class="term-log__text">{{ entry.text }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.term-log {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 100%;
}

.term-log__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.term-log__title {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #5c6770;
}

.term-log__live {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #33ff66;
  text-shadow: 0 0 7px rgba(51, 255, 102, 0.7);
  animation: term-log-pulse 1.6s ease-in-out infinite;
}

@keyframes term-log-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

.term-log__box {
  height: 200px;
  padding: 0.75rem 0.85rem;
  overflow-y: auto;
  background: rgba(51, 255, 102, 0.03);
  border: 1px solid rgba(51, 255, 102, 0.25);
  border-radius: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(51, 255, 102, 0.4) transparent;
}

.term-log__box::-webkit-scrollbar {
  width: 6px;
}

.term-log__box::-webkit-scrollbar-thumb {
  background: rgba(51, 255, 102, 0.35);
  border-radius: 3px;
}

.term-log__line {
  display: flex;
  gap: 0.6rem;
  margin: 0;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.7rem;
  line-height: 1.85;
  white-space: nowrap;
}

.term-log__time {
  color: rgba(92, 103, 112, 0.75);
}

.term-log__prefix {
  font-weight: 700;
}

.term-log__line--ok .term-log__prefix {
  color: #33ff66;
  text-shadow: 0 0 6px rgba(51, 255, 102, 0.7);
}

.term-log__line--warn .term-log__prefix {
  color: #ffb454;
  text-shadow: 0 0 6px rgba(255, 180, 84, 0.6);
}

.term-log__line--err .term-log__prefix {
  color: #5c6770;
}

.term-log__text {
  color: rgba(51, 255, 102, 0.82);
  overflow: hidden;
  text-overflow: ellipsis;
}

.term-log__line--warn .term-log__text {
  color: rgba(255, 180, 84, 0.85);
}

.term-log__line--err .term-log__text {
  color: rgba(163, 177, 188, 0.8);
}
</style>
