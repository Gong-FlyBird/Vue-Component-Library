import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const HermesButton = defineAsyncComponent(() => import('./HermesButton.vue'))
import HermesButtonRaw from './HermesButton.vue?raw'
const HermesCard = defineAsyncComponent(() => import('./HermesCard.vue'))
import HermesCardRaw from './HermesCard.vue?raw'
const HermesInput = defineAsyncComponent(() => import('./HermesInput.vue'))
import HermesInputRaw from './HermesInput.vue?raw'
const HermesBadge = defineAsyncComponent(() => import('./HermesBadge.vue'))
import HermesBadgeRaw from './HermesBadge.vue?raw'
const HermesToggle = defineAsyncComponent(() => import('./HermesToggle.vue'))
import HermesToggleRaw from './HermesToggle.vue?raw'
const HermesDivider = defineAsyncComponent(() => import('./HermesDivider.vue'))
import HermesDividerRaw from './HermesDivider.vue?raw'

export const hermesGroup: LibGroupMeta = {
  id: 'hermes',
  name: '爱马仕',
  en: 'Maison Hermès',
  tagline: '马鞍皮革 · 金色缝线 · 优雅衬线',
  theme: 'light',
  previewBg: 'radial-gradient(100% 120% at 80% 0%, #fbf6e8 0%, #f0e6cd 55%, #e5d7b8 100%)',
  gradient: 'linear-gradient(135deg, #c08a2d, #8a5a1e)',
  components: [
    { id: 'hermes-button', name: '皮革按钮', en: 'Leather Button', description: '马鞍棕色皮革质感，缝线描边与高光扫过动画。', tags: ['按钮'], component: HermesButton, raw: HermesButtonRaw },
    { id: 'hermes-card', name: '奢品卡片', en: 'Maison Card', description: '奶油面板双层描框（棕 + 金），钻石纹样与皮革纹理。', tags: ['卡片'], component: HermesCard, raw: HermesCardRaw },
    { id: 'hermes-input', name: '皮革输入框', en: 'Leather Input', description: '小写大写衬线标签，金色底线聚焦辉光。', tags: ['输入'], component: HermesInput, raw: HermesInputRaw },
    { id: 'hermes-badge', name: '金箔徽章', en: 'Gold Badge', description: '金箔椭圆徽章，衬线大写文字，循环流光。', tags: ['徽章'], component: HermesBadge, raw: HermesBadgeRaw },
    { id: 'hermes-toggle', name: '黄铜开关', en: 'Brass Toggle', description: '皮革与黄铜拼合开关，金色光晕开启态。', tags: ['开关'], component: HermesToggle, raw: HermesToggleRaw },
    { id: 'hermes-divider', name: '黄金分割线', en: 'Gold Divider', description: '鎏金装饰分割线，菱形与射线纹样。', tags: ['装饰'], component: HermesDivider, raw: HermesDividerRaw },
  ],
}
