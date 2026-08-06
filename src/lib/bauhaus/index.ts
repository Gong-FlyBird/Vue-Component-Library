import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const BauhausButton = defineAsyncComponent(() => import('./BauhausButton.vue'))
import BauhausButtonRaw from './BauhausButton.vue?raw'
const BauhausCard = defineAsyncComponent(() => import('./BauhausCard.vue'))
import BauhausCardRaw from './BauhausCard.vue?raw'
const BauhausBadge = defineAsyncComponent(() => import('./BauhausBadge.vue'))
import BauhausBadgeRaw from './BauhausBadge.vue?raw'
const BauhausLoader = defineAsyncComponent(() => import('./BauhausLoader.vue'))
import BauhausLoaderRaw from './BauhausLoader.vue?raw'
const BauhausInput = defineAsyncComponent(() => import('./BauhausInput.vue'))
import BauhausInputRaw from './BauhausInput.vue?raw'

export const bauhausGroup: LibGroupMeta = {
  id: 'bauhaus',
  name: '包豪斯',
  en: 'Bauhaus',
  tagline: '几何构成 · 红黄蓝 · 硬朗排印',
  theme: 'light',
  previewBg: 'linear-gradient(165deg, #f5f0e4 0%, #e9e2d0 100%)',
  gradient: 'linear-gradient(135deg, #e03a3e, #f2c400)',
  components: [
    { id: 'bauhaus-button', name: '几何按钮', en: 'Geometric Button', description: '胶囊按钮内黄色圆弧悬停滑动，形随色变。', tags: ['按钮'], component: BauhausButton, raw: BauhausButtonRaw },
    { id: 'bauhaus-card', name: '构成卡片', en: 'Composition Card', description: '黑底红圆蓝三角黄方块的构成主义卡片。', tags: ['卡片'], component: BauhausCard, raw: BauhausCardRaw },
    { id: 'bauhaus-badge', name: '同心圆徽章', en: 'Ring Badge', description: '红蓝同心圆环徽章，几何中心。', tags: ['徽章'], component: BauhausBadge, raw: BauhausBadgeRaw },
    { id: 'bauhaus-loader', name: '旋转圆环', en: 'Ring Loader', description: '三组几何圆环反向旋转。', tags: ['加载'], component: BauhausLoader, raw: BauhausLoaderRaw },
    { id: 'bauhaus-input', name: '几何输入框', en: 'Geometric Input', description: '加粗底线，聚焦变红，硬边几何。', tags: ['输入'], component: BauhausInput, raw: BauhausInputRaw },
  ],
}
