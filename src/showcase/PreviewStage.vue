<script setup lang="ts">
import { ref, watch } from 'vue'
import { Monitor, Smartphone, Tablet } from 'lucide-vue-next'
import type { LibGroupMeta } from '../lib'
import { rotatePreviewKey } from './composables/previewKey'

const props = defineProps<{
  group: LibGroupMeta
  component: LibGroupMeta['components'][number]['component']
}>()

type Width = 'desktop' | 'tablet' | 'mobile'
const width = ref<Width>('desktop')
const stageKey = ref(rotatePreviewKey.value)

const widths: Record<Width, number> = { desktop: 0, tablet: 640, mobile: 380 }

watch(rotatePreviewKey, () => {
  stageKey.value++
})
</script>

<template>
  <div class="stage" :style="{ background: group.previewBg }">
    <div class="width-bar">
      <button
        v-for="w in (['desktop', 'tablet', 'mobile'] as Width[])"
        :key="w"
        class="width-btn"
        :class="{ active: width === w }"
        :title="w"
        @click="width = w"
      >
        <Monitor v-if="w === 'desktop'" :size="13" />
        <Tablet v-else-if="w === 'tablet'" :size="13" />
        <Smartphone v-else :size="13" />
      </button>
    </div>
    <div class="stage-inner" :class="{ framed: width !== 'desktop' }" :style="width !== 'desktop' ? { maxWidth: widths[width] + 'px' } : {}">
      <component :key="stageKey" :is="component" class="component" />
    </div>
    <div class="stage-badge">
      <span>{{ group.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  position: relative;
  border-radius: 16px;
  padding: 42px 18px 30px;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background 0.4s ease;
}
.stage::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 22px 22px;
  pointer-events: none;
  opacity: 0.35;
}
.width-bar {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 4px;
  padding: 3px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  z-index: 5;
}
.width-btn {
  padding: 4px 7px;
  border-radius: 7px;
  color: rgba(255, 255, 255, 0.65);
  transition: all 0.18s ease;
}
.width-btn:hover {
  color: #fff;
}
.width-btn.active {
  background: rgba(255, 255, 255, 0.22);
  color: #fff;
}
.stage-inner {
  width: 100%;
  display: flex;
  justify-content: center;
  transition: max-width 0.35s ease;
}
.stage-inner.framed {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: var(--surface);
}
.component {
  width: 100%;
}
.stage-badge {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
</style>
