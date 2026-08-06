import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const CoffeeButton = defineAsyncComponent(() => import('./CoffeeButton.vue'))
import CoffeeButtonRaw from './CoffeeButton.vue?raw'
const CoffeeCard = defineAsyncComponent(() => import('./CoffeeCard.vue'))
import CoffeeCardRaw from './CoffeeCard.vue?raw'
const CoffeeTag = defineAsyncComponent(() => import('./CoffeeTag.vue'))
import CoffeeTagRaw from './CoffeeTag.vue?raw'
const CoffeeBadge = defineAsyncComponent(() => import('./CoffeeBadge.vue'))
import CoffeeBadgeRaw from './CoffeeBadge.vue?raw'
const CoffeeLoader = defineAsyncComponent(() => import('./CoffeeLoader.vue'))
import CoffeeLoaderRaw from './CoffeeLoader.vue?raw'

export const coffeeGroup: LibGroupMeta = {
  id: 'coffee',
  name: '复古咖啡',
  en: 'Vintage Coffee',
  tagline: '牛皮纸 · 咖啡褐 · 手工标签',
  theme: 'light',
  previewBg: 'linear-gradient(165deg, #efe3cb 0%, #e2d2b4 100%)',
  gradient: 'linear-gradient(135deg, #6f4e37, #c89b6d)',
  components: [
    { id: 'coffee-button', name: '咖啡按钮', en: 'Coffee Button', description: '圆润咖啡渐变按钮，奶油文字，悬停加深上浮。', tags: ['按钮'], component: CoffeeButton, raw: CoffeeButtonRaw },
    { id: 'coffee-card', name: '牛皮纸卡片', en: 'Kraft Card', description: '虚线描边 + 咖啡豆纹理 + 产地标签与价格印章。', tags: ['卡片'], component: CoffeeCard, raw: CoffeeCardRaw },
    { id: 'coffee-tag', name: '吊牌标签', en: 'Hang Tag', description: '穿孔吊牌配棉线，轻微旋转的手工感。', tags: ['标签'], component: CoffeeTag, raw: CoffeeTagRaw },
    { id: 'coffee-badge', name: '橡胶印章', en: 'Stamp Badge', description: '旋转双描边橡胶印章，做旧噪点。', tags: ['徽章'], component: CoffeeBadge, raw: CoffeeBadgeRaw },
    { id: 'coffee-loader', name: '蒸汽咖啡', en: 'Steam Cup', description: '咖啡杯升起袅袅奶白蒸汽。', tags: ['加载'], component: CoffeeLoader, raw: CoffeeLoaderRaw },
  ],
}
