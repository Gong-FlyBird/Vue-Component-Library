import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const NeuButton = defineAsyncComponent(() => import('./NeuButton.vue'))
import NeuButtonRaw from './NeuButton.vue?raw'
const NeuCard = defineAsyncComponent(() => import('./NeuCard.vue'))
import NeuCardRaw from './NeuCard.vue?raw'
const NeuToggle = defineAsyncComponent(() => import('./NeuToggle.vue'))
import NeuToggleRaw from './NeuToggle.vue?raw'
const NeuSlider = defineAsyncComponent(() => import('./NeuSlider.vue'))
import NeuSliderRaw from './NeuSlider.vue?raw'
const NeuBadge = defineAsyncComponent(() => import('./NeuBadge.vue'))
import NeuBadgeRaw from './NeuBadge.vue?raw'

export const neumorphGroup: LibGroupMeta = {
  id: 'neumorph',
  name: '新拟态',
  en: 'Neumorphism',
  tagline: '柔软 · 双阴影 · 内凹外凸',
  theme: 'light',
  previewBg: 'linear-gradient(160deg, #e8ecf3 0%, #d8dde6 100%)',
  gradient: 'linear-gradient(135deg, #7d93b8, #b9c6da)',
  components: [
    { id: 'neu-button', name: '柔软按钮', en: 'Soft Button', description: '新拟态药丸按钮：左上亮右下暗双阴影，按下内凹。', tags: ['按钮'], component: NeuButton, raw: NeuButtonRaw },
    { id: 'neu-card', name: '软组件板', en: 'Soft Panel', description: '外凸面板内嵌内凹滑杆与开关的小组件板。', tags: ['卡片'], component: NeuCard, raw: NeuCardRaw },
    { id: 'neu-toggle', name: '软开关', en: 'Soft Toggle', description: '内凹轨道 + 外凸滑块，开启泛绿。', tags: ['开关'], component: NeuToggle, raw: NeuToggleRaw },
    { id: 'neu-slider', name: '软滑杆', en: 'Soft Slider', description: '内凹轨道 + 外凸旋钮，支持拖拽与键盘。', tags: ['滑块'], component: NeuSlider, raw: NeuSliderRaw },
    { id: 'neu-badge', name: '软徽章', en: 'Soft Badge', description: '外凸药丸内嵌内凹文字徽章。', tags: ['徽章'], component: NeuBadge, raw: NeuBadgeRaw },
  ],
}
