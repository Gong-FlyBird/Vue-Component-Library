import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const BrutalButton = defineAsyncComponent(() => import('./BrutalButton.vue'))
import BrutalButtonRaw from './BrutalButton.vue?raw'
const BrutalCard = defineAsyncComponent(() => import('./BrutalCard.vue'))
import BrutalCardRaw from './BrutalCard.vue?raw'
const BrutalInput = defineAsyncComponent(() => import('./BrutalInput.vue'))
import BrutalInputRaw from './BrutalInput.vue?raw'
const BrutalBadge = defineAsyncComponent(() => import('./BrutalBadge.vue'))
import BrutalBadgeRaw from './BrutalBadge.vue?raw'
const BrutalToggle = defineAsyncComponent(() => import('./BrutalToggle.vue'))
import BrutalToggleRaw from './BrutalToggle.vue?raw'

export const brutalGroup: LibGroupMeta = {
  id: 'brutal',
  name: '粗野主义',
  en: 'Neo-Brutalism',
  tagline: '硬边 · 2px 描边 · 偏移硬阴影',
  theme: 'light',
  previewBg: 'linear-gradient(180deg, #f8f4ec 0%, #efe8da 100%)',
  gradient: 'linear-gradient(135deg, #ffd02f, #ff4d6d)',
  components: [
    { id: 'brutal-button', name: '硬核按钮', en: 'Hard Button', description: '粗野按钮：4px 硬偏移阴影，按下完全压实。', tags: ['按钮'], component: BrutalButton, raw: BrutalButtonRaw },
    { id: 'brutal-card', name: '硬核卡片', en: 'Hard Card', description: '浏览器圆点条 + 巨型数字，夸张偏移阴影。', tags: ['卡片'], component: BrutalCard, raw: BrutalCardRaw },
    { id: 'brutal-input', name: '硬核输入框', en: 'Hard Input', description: '加粗等宽输入框，聚焦时背景闪黄。', tags: ['输入'], component: BrutalInput, raw: BrutalInputRaw },
    { id: 'brutal-badge', name: '硬核徽章', en: 'Hard Badge', description: '旋转方形徽章，悬停回正。', tags: ['徽章'], component: BrutalBadge, raw: BrutalBadgeRaw },
    { id: 'brutal-toggle', name: '硬核开关', en: 'Hard Toggle', description: '方形硬阴影开关，绿开灰关瞬时切换。', tags: ['开关'], component: BrutalToggle, raw: BrutalToggleRaw },
  ],
}
