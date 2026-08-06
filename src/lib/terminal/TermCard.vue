<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const queue = [
  '> atelier --boot --verbose',
  'kernel 2.4.7-crt ........ ok',
  'mounting /dev/phosphor .. ok',
  'vram: 64K mono buffer ready',
  'grid daemon up [pid 1337]',
  'all systems nominal — ready.',
]

const done = ref<string[]>([])
const current = ref('')
let qi = 0
let ci = 0
let timer: number | undefined

function tick() {
  if (qi >= queue.length) {
    if (timer !== undefined) window.clearInterval(timer)
    timer = undefined
    return
  }
  const line = queue[qi]
  if (ci < line.length) {
    current.value = current.value + line[ci]
    ci += 1
    return
  }
  done.value.push(line)
  qi += 1
  ci = 0
  current.value = ''
}

onMounted(() => {
  timer = window.setInterval(tick, 26)
})

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearInterval(timer)
})
</script>

<template>
  <div class="term-card">
    <header class="term-card__bar">
      <span class="term-card__dots" aria-hidden="true">
        <span class="term-card__dot term-card__dot--r"></span>
        <span class="term-card__dot term-card__dot--y"></span>
        <span class="term-card__dot term-card__dot--g"></span>
      </span>
      <span class="term-card__title">atelier://console</span>
    </header>

    <div class="term-card__body">
      <p v-for="(line, i) in done" :key="i" class="term-card__line">{{ line }}</p>
      <p v-if="qi < queue.length" class="term-card__line">
        {{ current }}<span class="term-card__cursor" aria-hidden="true"></span>
      </p>
      <p v-else class="term-card__line">
        > <span class="term-card__cursor" aria-hidden="true"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.term-card {
  position: relative;
  max-width: 100%;
  background: #0c120c;
  border: 1px solid rgba(51, 255, 102, 0.28);
  border-radius: 6px;
  box-shadow:
    0 0 24px rgba(51, 255, 102, 0.1),
    inset 0 0 40px rgba(51, 255, 102, 0.04);
  overflow: hidden;
}

.term-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.22) 0 1px,
    transparent 1px 3px
  );
  pointer-events: none;
}

.term-card__bar {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.55rem 0.85rem;
  background: rgba(51, 255, 102, 0.06);
  border-bottom: 1px solid rgba(51, 255, 102, 0.2);
}

.term-card__dots {
  display: inline-flex;
  gap: 5px;
}

.term-card__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.term-card__dot--r {
  background: #ff5f56;
}

.term-card__dot--y {
  background: #ffbd2e;
}

.term-card__dot--g {
  background: #27c93f;
}

.term-card__title {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  color: rgba(51, 255, 102, 0.75);
}

.term-card__body {
  height: 195px;
  padding: 0.9rem 1rem;
  overflow: hidden;
}

.term-card__line {
  margin: 0;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.78rem;
  line-height: 1.75;
  white-space: pre;
  color: #33ff66;
  text-shadow: 0 0 6px rgba(51, 255, 102, 0.55);
}

.term-card__cursor {
  display: inline-block;
  width: 0.52em;
  height: 1.05em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: #33ff66;
  box-shadow: 0 0 8px rgba(51, 255, 102, 0.8);
  animation: term-card-blink 1s steps(2, start) infinite;
}

@keyframes term-card-blink {
  to {
    opacity: 0;
  }
}
</style>
