import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const GradButton = defineAsyncComponent(() => import('./GradButton.vue'))
import GradButtonRaw from './GradButton.vue?raw'
const GradCard = defineAsyncComponent(() => import('./GradCard.vue'))
import GradCardRaw from './GradCard.vue?raw'
const GradText = defineAsyncComponent(() => import('./GradText.vue'))
import GradTextRaw from './GradText.vue?raw'
const GradBadge = defineAsyncComponent(() => import('./GradBadge.vue'))
import GradBadgeRaw from './GradBadge.vue?raw'
const GradLoader = defineAsyncComponent(() => import('./GradLoader.vue'))
import GradLoaderRaw from './GradLoader.vue?raw'

export const gradientGroup: LibGroupMeta = {
  id: 'gradient',
  name: '流动渐变',
  en: 'Aurora Gradient',
  tagline: '极光流动 · 彩色描边 · 光晕',
  theme: 'dark',
  previewBg: 'radial-gradient(120% 130% at 50% 0%, #1a1826 0%, #0c0b12 80%)',
  gradient: 'linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24)',
  components: [
    { id: 'grad-button', name: '流光按钮', en: 'Flow Button', description: '双倍尺寸背景位移动画的多彩渐变按钮 + 渐变文字变体。', tags: ['按钮'], component: GradButton, raw: GradButtonRaw },
    { id: 'grad-card', name: '渐变描边卡片', en: 'Aurora Card', description: '旋转圆锥渐变描边 + 深色内芯，极光质感。', tags: ['卡片'], component: GradCard, raw: GradCardRaw },
    { id: 'grad-text', name: '极光标题', en: 'Aurora Title', description: '超大渐变衬线标题，慢速流光扫过。', tags: ['文字'], component: GradText, raw: GradTextRaw },
    { id: 'grad-badge', name: '光晕徽章', en: 'Glow Badge', description: '渐变药丸 + 脉冲光点 + 悬停上浮。', tags: ['徽章'], component: GradBadge, raw: GradBadgeRaw },
    { id: 'grad-loader', name: '流体加载', en: 'Blob Loader', description: '形变流体色块 + 旋转缩放 + 渐变填充。', tags: ['加载'], component: GradLoader, raw: GradLoaderRaw },
  ],
}
