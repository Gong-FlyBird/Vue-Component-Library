import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const LinButton = defineAsyncComponent(() => import('./LinButton.vue'))
import LinButtonRaw from './LinButton.vue?raw'
const LinCard = defineAsyncComponent(() => import('./LinCard.vue'))
import LinCardRaw from './LinCard.vue?raw'
const LinInput = defineAsyncComponent(() => import('./LinInput.vue'))
import LinInputRaw from './LinInput.vue?raw'
const LinToggle = defineAsyncComponent(() => import('./LinToggle.vue'))
import LinToggleRaw from './LinToggle.vue?raw'
const LinProgress = defineAsyncComponent(() => import('./LinProgress.vue'))
import LinProgressRaw from './LinProgress.vue?raw'

export const linearGroup: LibGroupMeta = {
  id: 'linear',
  name: '极简科技',
  en: 'Linear Style',
  tagline: 'Linear/Stripe 风 · 深色克制 · 靛蓝点缀',
  theme: 'dark',
  previewBg: 'radial-gradient(120% 120% at 80% 0%, #141420 0%, #08080c 70%)',
  gradient: 'linear-gradient(135deg, #5e6ad2, #a5b4fc)',
  components: [
    { id: 'lin-button', name: '极简按钮', en: 'Clean Button', description: '深底白圆按钮，三种形态：主/次/靛蓝。', tags: ['按钮'], component: LinButton, raw: LinButtonRaw },
    { id: 'lin-card', name: '克制的卡片', en: 'Quiet Card', description: '1px 细边卡片，悬停轻升 + 靛蓝柔光。', tags: ['卡片'], component: LinCard, raw: LinCardRaw },
    { id: 'lin-input', name: '极简输入框', en: 'Clean Input', description: '灰色小标签，聚焦靛蓝描边 + 辉光。', tags: ['输入'], component: LinInput, raw: LinInputRaw },
    { id: 'lin-toggle', name: '极简开关', en: 'Clean Toggle', description: '灰色轨道白滑块，靛蓝开启瞬时切换。', tags: ['开关'], component: LinToggle, raw: LinToggleRaw },
    { id: 'lin-progress', name: '细进度条', en: 'Thin Progress', description: '4px 细进度条，靛蓝渐变流光。', tags: ['进度'], component: LinProgress, raw: LinProgressRaw },
  ],
}
