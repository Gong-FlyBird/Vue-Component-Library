import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const MujiButton = defineAsyncComponent(() => import('./MujiButton.vue'))
import MujiButtonRaw from './MujiButton.vue?raw'
const MujiCard = defineAsyncComponent(() => import('./MujiCard.vue'))
import MujiCardRaw from './MujiCard.vue?raw'
const MujiInput = defineAsyncComponent(() => import('./MujiInput.vue'))
import MujiInputRaw from './MujiInput.vue?raw'
const MujiBadge = defineAsyncComponent(() => import('./MujiBadge.vue'))
import MujiBadgeRaw from './MujiBadge.vue?raw'
const MujiTag = defineAsyncComponent(() => import('./MujiTag.vue'))
import MujiTagRaw from './MujiTag.vue?raw'
const MujiLoader = defineAsyncComponent(() => import('./MujiLoader.vue'))
import MujiLoaderRaw from './MujiLoader.vue?raw'

export const mujiGroup: LibGroupMeta = {
  id: 'muji',
  name: '日式侘寂',
  en: 'Wabi-Sabi',
  tagline: 'MUJI 风 · 宣纸留白 · 发丝描线',
  theme: 'light',
  previewBg: 'linear-gradient(160deg, #faf8f2 0%, #f3efe4 100%)',
  gradient: 'linear-gradient(135deg, #9c7c5c, #3d3a34)',
  components: [
    { id: 'muji-button', name: '极简按钮', en: 'Minimal Button', description: '发丝描线矩形按钮，大写留白字距，悬停轻填色。', tags: ['按钮'], component: MujiButton, raw: MujiButtonRaw },
    { id: 'muji-card', name: '宣纸卡片', en: 'Rice Paper Card', description: '宣纸质感卡片，克制阴影与衬线标题。', tags: ['卡片'], component: MujiCard, raw: MujiCardRaw },
    { id: 'muji-input', name: '极简输入框', en: 'Minimal Input', description: '细标签 + 发丝底线，聚焦时墨色加深。', tags: ['输入'], component: MujiInput, raw: MujiInputRaw },
    { id: 'muji-badge', name: '极简徽章', en: 'Minimal Badge', description: '发丝描边药丸徽章，大写字距文字。', tags: ['徽章'], component: MujiBadge, raw: MujiBadgeRaw },
    { id: 'muji-tag', name: '静谧标签', en: 'Quiet Tag', description: '圆点 + 细边标签，悬停轻转暖色。', tags: ['标签'], component: MujiTag, raw: MujiTagRaw },
    { id: 'muji-loader', name: '呼吸加载', en: 'Breathing Loader', description: '三个墨色圆点错峰呼吸，安静而克制。', tags: ['加载'], component: MujiLoader, raw: MujiLoaderRaw },
  ],
}
