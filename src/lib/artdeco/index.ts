import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const DecoButton = defineAsyncComponent(() => import('./DecoButton.vue'))
import DecoButtonRaw from './DecoButton.vue?raw'
const DecoCard = defineAsyncComponent(() => import('./DecoCard.vue'))
import DecoCardRaw from './DecoCard.vue?raw'
const DecoDivider = defineAsyncComponent(() => import('./DecoDivider.vue'))
import DecoDividerRaw from './DecoDivider.vue?raw'
const DecoBadge = defineAsyncComponent(() => import('./DecoBadge.vue'))
import DecoBadgeRaw from './DecoBadge.vue?raw'
const DecoFrame = defineAsyncComponent(() => import('./DecoFrame.vue'))
import DecoFrameRaw from './DecoFrame.vue?raw'

export const artdecoGroup: LibGroupMeta = {
  id: 'artdeco',
  name: '装饰艺术',
  en: 'Art Deco',
  tagline: '午夜蓝金 · 阳光射线 · 衬线大写',
  theme: 'dark',
  previewBg: 'radial-gradient(120% 130% at 50% 0%, #1b2033 0%, #0d1019 75%)',
  gradient: 'linear-gradient(135deg, #d4af37, #8a6d1f)',
  components: [
    { id: 'deco-button', name: '鎏金按钮', en: 'Gilt Button', description: '双层金线描边 + 边角装饰，悬停流光扫过。', tags: ['按钮'], component: DecoButton, raw: DecoButtonRaw },
    { id: 'deco-card', name: '金色卡片', en: 'Gold Card', description: '太阳光扇形顶饰，衬线标题与金色分割线。', tags: ['卡片'], component: DecoCard, raw: DecoCardRaw },
    { id: 'deco-divider', name: '黄金分割线', en: 'Gilt Divider', description: '金线 + 嵌套菱形 + 三射纹。', tags: ['装饰'], component: DecoDivider, raw: DecoDividerRaw },
    { id: 'deco-badge', name: '八角徽章', en: 'Octagon Badge', description: 'clip-path 金色八角徽章，奶油衬线文字。', tags: ['徽章'], component: DecoBadge, raw: DecoBadgeRaw },
    { id: 'deco-frame', name: '金色画框', en: 'Gallery Frame', description: '鎏金画框 + 奶油卡纸 + 金色扇饰内芯。', tags: ['装饰'], component: DecoFrame, raw: DecoFrameRaw },
  ],
}
