import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const BentoGrid = defineAsyncComponent(() => import('./BentoGrid.vue'))
import BentoGridRaw from './BentoGrid.vue?raw'
const BentoCard = defineAsyncComponent(() => import('./BentoCard.vue'))
import BentoCardRaw from './BentoCard.vue?raw'
const BentoStats = defineAsyncComponent(() => import('./BentoStats.vue'))
import BentoStatsRaw from './BentoStats.vue?raw'

export const bentoGroup: LibGroupMeta = {
  id: 'bento',
  name: 'Bento 网格',
  en: 'Bento Grid',
  tagline: 'Apple 风 · 圆角磁贴 · 信息面板',
  theme: 'light',
  previewBg: 'linear-gradient(180deg, #f7f7fa 0%, #ececf2 100%)',
  gradient: 'linear-gradient(135deg, #0a84ff, #5e5ce6)',
  components: [
    { id: 'bento-grid', name: 'Bento 面板', en: 'Bento Board', description: '完整 Apple 风小组件面板：天气 2x2、图表、音乐、统计。', tags: ['布局'], component: BentoGrid, raw: BentoGridRaw },
    { id: 'bento-card', name: '磁贴卡片', en: 'Bento Tile', description: '24px 圆角磁贴，白/深/渐变三态，悬停放大。', tags: ['卡片'], component: BentoCard, raw: BentoCardRaw },
    { id: 'bento-stats', name: '统计磁贴', en: 'Stat Tile', description: '数字上浮动画 + 涨跌箭头统计磁贴。', tags: ['数据'], component: BentoStats, raw: BentoStatsRaw },
  ],
}
