import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const NeonButton = defineAsyncComponent(() => import('./NeonButton.vue'))
import NeonButtonRaw from './NeonButton.vue?raw'
const NeonCard = defineAsyncComponent(() => import('./NeonCard.vue'))
import NeonCardRaw from './NeonCard.vue?raw'
const NeonInput = defineAsyncComponent(() => import('./NeonInput.vue'))
import NeonInputRaw from './NeonInput.vue?raw'
const NeonToggle = defineAsyncComponent(() => import('./NeonToggle.vue'))
import NeonToggleRaw from './NeonToggle.vue?raw'
const NeonProgress = defineAsyncComponent(() => import('./NeonProgress.vue'))
import NeonProgressRaw from './NeonProgress.vue?raw'
const NeonBadge = defineAsyncComponent(() => import('./NeonBadge.vue'))
import NeonBadgeRaw from './NeonBadge.vue?raw'

export const neonGroup: LibGroupMeta = {
  id: 'neon',
  name: '赛博霓虹',
  en: 'Neon Cyber',
  tagline: 'NVIDIA 风 · 青色辉光 · 电路扫描',
  theme: 'dark',
  previewBg: 'radial-gradient(120% 120% at 30% 10%, #141a2e 0%, #07090f 70%)',
  gradient: 'linear-gradient(135deg, #00f0ff, #ff2ec4)',
  components: [
    { id: 'neon-button', name: '霓虹按钮', en: 'Neon Button', description: '赛博朋克按钮：霓虹描边发光，悬停点亮 + 扫描线。', tags: ['按钮'], component: NeonButton, raw: NeonButtonRaw },
    { id: 'neon-card', name: '霓虹卡片', en: 'Neon Card', description: '深色面板内嵌霓虹边缘，切角点缀与网格背景。', tags: ['卡片'], component: NeonCard, raw: NeonCardRaw },
    { id: 'neon-input', name: '霓虹输入框', en: 'Neon Input', description: '深色输入框，聚焦时底线霓虹发光，等宽字体。', tags: ['输入'], component: NeonInput, raw: NeonInputRaw },
    { id: 'neon-toggle', name: '电路开关', en: 'Circuit Toggle', description: '电路板风格开关，PCB 走线与霓虹滑块。', tags: ['开关'], component: NeonToggle, raw: NeonToggleRaw },
    { id: 'neon-progress', name: '霓虹进度条', en: 'Neon Progress', description: '发光进度条带流光，加载至 72% 百分比实时显示。', tags: ['进度'], component: NeonProgress, raw: NeonProgressRaw },
    { id: 'neon-badge', name: '霓虹徽章', en: 'Neon Badge', description: '脉冲霓虹圆点 + 等宽大写文字徽章。', tags: ['徽章'], component: NeonBadge, raw: NeonBadgeRaw },
  ],
}
