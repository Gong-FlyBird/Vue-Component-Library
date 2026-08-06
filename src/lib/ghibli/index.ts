import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const GhibliButton = defineAsyncComponent(() => import('./GhibliButton.vue'))
import GhibliButtonRaw from './GhibliButton.vue?raw'
const GhibliCard = defineAsyncComponent(() => import('./GhibliCard.vue'))
import GhibliCardRaw from './GhibliCard.vue?raw'
const GhibliTag = defineAsyncComponent(() => import('./GhibliTag.vue'))
import GhibliTagRaw from './GhibliTag.vue?raw'
const GhibliBadge = defineAsyncComponent(() => import('./GhibliBadge.vue'))
import GhibliBadgeRaw from './GhibliBadge.vue?raw'
const GhibliLoader = defineAsyncComponent(() => import('./GhibliLoader.vue'))
import GhibliLoaderRaw from './GhibliLoader.vue?raw'

export const ghibliGroup: LibGroupMeta = {
  id: 'ghibli',
  name: '吉卜力自然',
  en: 'Ghibli Pastoral',
  tagline: '草甸晴空 · 软萌云朵 · 手作温度',
  theme: 'light',
  previewBg: 'linear-gradient(180deg, #d9f0e9 0%, #bfe2d4 100%)',
  gradient: 'linear-gradient(135deg, #9dcb6f, #a8d8ea)',
  components: [
    { id: 'ghibli-button', name: '草甸按钮', en: 'Meadow Button', description: '草绿/天蓝软圆按钮，多层柔影，悬停轻轻蹦跳。', tags: ['按钮'], component: GhibliButton, raw: GhibliButtonRaw },
    { id: 'ghibli-card', name: '自然卡片', en: 'Nature Card', description: '卡片顶部内置 CSS 风景画（山丘 + 太阳），悬停上浮。', tags: ['卡片'], component: GhibliCard, raw: GhibliCardRaw },
    { id: 'ghibli-tag', name: '叶片标签', en: 'Leaf Tag', description: '旋转叶片圆点 + 柔和底色标签。', tags: ['标签'], component: GhibliTag, raw: GhibliTagRaw },
    { id: 'ghibli-badge', name: '星芒徽章', en: 'Starburst Badge', description: 'CSS 八角星芒徽章，悬停轻旋。', tags: ['徽章'], component: GhibliBadge, raw: GhibliBadgeRaw },
    { id: 'ghibli-loader', name: '云朵加载', en: 'Cloud Loader', description: '毛茸茸的云朵在晴空飘过。', tags: ['加载'], component: GhibliLoader, raw: GhibliLoaderRaw },
  ],
}
