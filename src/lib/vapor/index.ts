import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const VaporButton = defineAsyncComponent(() => import('./VaporButton.vue'))
import VaporButtonRaw from './VaporButton.vue?raw'
const VaporCard = defineAsyncComponent(() => import('./VaporCard.vue'))
import VaporCardRaw from './VaporCard.vue?raw'
const VaporToggle = defineAsyncComponent(() => import('./VaporToggle.vue'))
import VaporToggleRaw from './VaporToggle.vue?raw'
const VaporLoader = defineAsyncComponent(() => import('./VaporLoader.vue'))
import VaporLoaderRaw from './VaporLoader.vue?raw'
const VaporBadge = defineAsyncComponent(() => import('./VaporBadge.vue'))
import VaporBadgeRaw from './VaporBadge.vue?raw'

export const vaporGroup: LibGroupMeta = {
  id: 'vapor',
  name: '蒸汽波',
  en: 'Vaporwave',
  tagline: '80s 复古未来 · 霓虹日落 · 渐变网格',
  theme: 'dark',
  previewBg: 'linear-gradient(180deg, #1c0e3f 0%, #2a1355 60%, #1a0b34 100%)',
  gradient: 'linear-gradient(135deg, #ff71ce, #01cdfe)',
  components: [
    { id: 'vapor-button', name: '复古霓虹按钮', en: 'Retro Button', description: '描边霓虹按钮，悬停镀铬文字渐变。', tags: ['按钮'], component: VaporButton, raw: VaporButtonRaw },
    { id: 'vapor-card', name: '日落卡片', en: 'Sunset Card', description: '80s 日落 + 透视网格，镀铬渐变标题。', tags: ['卡片'], component: VaporCard, raw: VaporCardRaw },
    { id: 'vapor-toggle', name: '糖果开关', en: 'Candy Toggle', description: '粉紫渐变轨道糖果开关，高光滑块。', tags: ['开关'], component: VaporToggle, raw: VaporToggleRaw },
    { id: 'vapor-loader', name: '霓虹旋环', en: 'Neon Ring', description: '旋转渐变光环 + 金色星光核心。', tags: ['加载'], component: VaporLoader, raw: VaporLoaderRaw },
    { id: 'vapor-badge', name: '镀铬徽章', en: 'Chrome Badge', description: '镀铬渐变文字 + 霓虹描边。', tags: ['徽章'], component: VaporBadge, raw: VaporBadgeRaw },
  ],
}
