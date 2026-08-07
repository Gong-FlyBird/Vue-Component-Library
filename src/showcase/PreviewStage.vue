<script setup lang="ts">
import { ref, watch } from 'vue'
import { Code2 } from 'lucide-vue-next'
import type { LibGroupMeta } from '../lib'
import { rotatePreviewKey } from './composables/previewKey'

const props = defineProps<{
  group: LibGroupMeta
  component: LibGroupMeta['components'][number]['component']
  index?: number
}>()

const emit = defineEmits<{ goCode: [] }>()

type Width = 'desktop' | 'tablet' | 'mobile'
const width = ref<Width>('desktop')
const stageKey = ref(rotatePreviewKey.value)

const widths: Record<Width, number> = { desktop: 0, tablet: 640, mobile: 380 }
const padNum = (n?: number) => (n !== undefined ? String(n + 1).padStart(2, '0') : '')

watch(rotatePreviewKey, () => {
  stageKey.value++
})
</script>

<template>
  <div id="preview-stage" class="stage">
    <div class="stage-head">
      <span class="kicker">
        {{ padNum(index) }} — LIVE · {{ group.name }} · {{ group.en }}
      </span>
      <div class="head-right">
        <div class="widths mono">
          <button
            v-for="w in (['desktop', 'tablet', 'mobile'] as Width[])"
            :key="w"
            class="wbtn"
            :class="{ active: width === w }"
            @click="width = w"
          >
            {{ w === 'desktop' ? 'DESK' : w === 'tablet' ? 'TAB' : 'MOB' }}
          </button>
        </div>
        <button class="goto mono" @click="emit('goCode')">
          <Code2 :size="12" />
          查看代码
        </button>
      </div>
    </div>
    <div class="stage-body" :style="{ background: group.previewBg }">
      <div
        class="stage-inner"
        :class="{ framed: width !== 'desktop' }"
        :style="width !== 'desktop' ? { maxWidth: widths[width] + 'px' } : {}"
      >
        <component :key="stageKey" :is="component" class="component" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.stage {
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
}
.stage-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-bottom: 1px solid var(--line);
  background: var(--surface);
}
.widths {
  display: flex;
  gap: 2px;
}
.head-right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.goto {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  letter-spacing: 0.12em;
  padding: 5px 11px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink-2);
  transition: all 0.18s ease;
}
.goto:hover {
  border-color: var(--ink);
  color: var(--ink);
  background: var(--surface-3);
}
.wbtn {
  font-size: 9.5px;
  letter-spacing: 0.14em;
  padding: 4px 9px;
  color: var(--ink-3);
  border-radius: var(--radius);
  transition: all 0.15s ease;
}
.wbtn:hover {
  color: var(--ink);
}
.wbtn.active {
  color: var(--ink);
  background: var(--surface-3);
}
.stage-body {
  position: relative;
  min-height: 420px;
  padding: 56px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s ease;
  overflow: hidden;
}
.stage-body::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: 0.35;
  pointer-events: none;
}
.stage-inner {
  width: 100%;
  display: flex;
  justify-content: center;
  transition: max-width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.stage-inner.framed {
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 24px 70px -24px rgba(0, 0, 0, 0.5);
  background: var(--surface);
  border-radius: 2px;
  overflow: hidden;
}
.component {
  width: 100%;
}
</style>
