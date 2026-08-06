import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const GlassButton = defineAsyncComponent(() => import('./GlassButton.vue'))
import GlassButtonRaw from './GlassButton.vue?raw'
const GlassCard = defineAsyncComponent(() => import('./GlassCard.vue'))
import GlassCardRaw from './GlassCard.vue?raw'
const GlassInput = defineAsyncComponent(() => import('./GlassInput.vue'))
import GlassInputRaw from './GlassInput.vue?raw'
const GlassToggle = defineAsyncComponent(() => import('./GlassToggle.vue'))
import GlassToggleRaw from './GlassToggle.vue?raw'
const GlassNavbar = defineAsyncComponent(() => import('./GlassNavbar.vue'))
import GlassNavbarRaw from './GlassNavbar.vue?raw'
const GlassSlider = defineAsyncComponent(() => import('./GlassSlider.vue'))
import GlassSliderRaw from './GlassSlider.vue?raw'

export const glassGroup: LibGroupMeta = {
  id: 'glass',
  name: '液态玻璃',
  en: 'Liquid Glass',
  tagline: 'Apple iOS 26 · 半透明辉光 · 动态模糊',
  theme: 'dark',
  previewBg: 'radial-gradient(120% 140% at 20% 10%, #232a49 0%, #141a30 45%, #0d111f 100%)',
  gradient: 'linear-gradient(135deg, #6db8ff, #8f7bff)',
  components: [
    { id: 'glass-button', name: '玻璃按钮', en: 'Glass Button', description: '半透明模糊胶囊按钮，顶部高光与深层投影营造悬浮玻璃质感。', tags: ['按钮'], component: GlassButton, raw: GlassButtonRaw },
    { id: 'glass-card', name: '玻璃卡片', en: 'Glass Card', description: '毛玻璃面板：动态模糊 + 色彩增强，顶部高光线，悬浮时微升。', tags: ['卡片'], component: GlassCard, raw: GlassCardRaw },
    { id: 'glass-input', name: '玻璃输入框', en: 'Glass Input', description: '胶囊玻璃输入框，浮动标签与天蓝聚焦光环。', tags: ['输入'], component: GlassInput, raw: GlassInputRaw },
    { id: 'glass-toggle', name: '玻璃开关', en: 'Glass Toggle', description: 'iOS 26 风格玻璃开关，发光滑块带弹簧动画。', tags: ['开关'], component: GlassToggle, raw: GlassToggleRaw },
    { id: 'glass-navbar', name: '玻璃导航栏', en: 'Glass Navbar', description: '悬浮玻璃顶栏：链接胶囊高亮、玻璃搜索框、头像。', tags: ['导航'], component: GlassNavbar, raw: GlassNavbarRaw },
    { id: 'glass-slider', name: '玻璃滑杆', en: 'Glass Slider', description: '玻璃音量滑杆，渐变填充轨道与发光滑块，支持拖拽。', tags: ['滑块'], component: GlassSlider, raw: GlassSliderRaw },
  ],
}
