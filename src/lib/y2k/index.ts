import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const Y2kButton = defineAsyncComponent(() => import('./Y2kButton.vue'))
import Y2kButtonRaw from './Y2kButton.vue?raw'
const Y2kCard = defineAsyncComponent(() => import('./Y2kCard.vue'))
import Y2kCardRaw from './Y2kCard.vue?raw'
const Y2kBadge = defineAsyncComponent(() => import('./Y2kBadge.vue'))
import Y2kBadgeRaw from './Y2kBadge.vue?raw'
const Y2kLoader = defineAsyncComponent(() => import('./Y2kLoader.vue'))
import Y2kLoaderRaw from './Y2kLoader.vue?raw'
const Y2kToggle = defineAsyncComponent(() => import('./Y2kToggle.vue'))
import Y2kToggleRaw from './Y2kToggle.vue?raw'

export const y2kGroup: LibGroupMeta = {
  id: 'y2k',
  name: '千禧 Y2K',
  en: 'Y2K Glitter',
  tagline: '糖果亮片 · 镀铬文字 · 蝴蝶结',
  theme: 'light',
  previewBg: 'linear-gradient(165deg, #fdf3f9 0%, #f3e4f6 100%)',
  gradient: 'linear-gradient(135deg, #ffd1dc, #b28df8, #7fd8f7)',
  components: [
    { id: 'y2k-button', name: '果冻按钮', en: 'Jelly Button', description: '3D 果冻光泽 + 虹彩描边，悬停闪烁亮片。', tags: ['按钮'], component: Y2kButton, raw: Y2kButtonRaw },
    { id: 'y2k-card', name: '虹彩卡片', en: 'Iridescent Card', description: '圆锥渐变虹彩描边 + 镀铬标题 + 闪烁星芒。', tags: ['卡片'], component: Y2kCard, raw: Y2kCardRaw },
    { id: 'y2k-badge', name: '贴纸徽章', en: 'Sticker Badge', description: '粉紫青渐变贴纸 + 白色描边 + 高光。', tags: ['徽章'], component: Y2kBadge, raw: Y2kBadgeRaw },
    { id: 'y2k-loader', name: '花瓣旋转', en: 'Blossom Loader', description: '六瓣糖果色花朵旋转，花心高光。', tags: ['加载'], component: Y2kLoader, raw: Y2kLoaderRaw },
    { id: 'y2k-toggle', name: '糖果开关', en: 'Candy Toggle', description: '粉紫渐变轨道 + 高光圆点滑块。', tags: ['开关'], component: Y2kToggle, raw: Y2kToggleRaw },
  ],
}
