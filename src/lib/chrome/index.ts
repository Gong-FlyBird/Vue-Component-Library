import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const ChromeButton = defineAsyncComponent(() => import('./ChromeButton.vue'))
import ChromeButtonRaw from './ChromeButton.vue?raw'
const ChromeCard = defineAsyncComponent(() => import('./ChromeCard.vue'))
import ChromeCardRaw from './ChromeCard.vue?raw'
const ChromeBadge = defineAsyncComponent(() => import('./ChromeBadge.vue'))
import ChromeBadgeRaw from './ChromeBadge.vue?raw'
const ChromeLoader = defineAsyncComponent(() => import('./ChromeLoader.vue'))
import ChromeLoaderRaw from './ChromeLoader.vue?raw'
const ChromeSlider = defineAsyncComponent(() => import('./ChromeSlider.vue'))
import ChromeSliderRaw from './ChromeSlider.vue?raw'

export const chromeGroup: LibGroupMeta = {
  id: 'chrome',
  name: '金属镀铬',
  en: 'Chrome',
  tagline: '拉丝金属 · 立体倒角 · 镜面反光',
  theme: 'light',
  previewBg: 'linear-gradient(160deg, #d3d8e0 0%, #b8bec8 100%)',
  gradient: 'linear-gradient(135deg, #9aa4b2, #e8ecf2)',
  components: [
    { id: 'chrome-button', name: '金属按钮', en: 'Metal Button', description: '拉丝金属渐变 + 立体倒角，悬停流光，按下倒角反转。', tags: ['按钮'], component: ChromeButton, raw: ChromeButtonRaw },
    { id: 'chrome-card', name: '拉丝面板', en: 'Brushed Panel', description: '横向拉丝纹理金属面板，倒角边缘与反射条。', tags: ['卡片'], component: ChromeCard, raw: ChromeCardRaw },
    { id: 'chrome-badge', name: '镀铬徽章', en: 'Chrome Badge', description: '银金镀铬药丸，顶部高光与内倒角。', tags: ['徽章'], component: ChromeBadge, raw: ChromeBadgeRaw },
    { id: 'chrome-loader', name: '镀铬球体', en: 'Chrome Ball', description: '旋转镀铬球体：径向高光 + 环带反光，纯 CSS。', tags: ['加载'], component: ChromeLoader, raw: ChromeLoaderRaw },
    { id: 'chrome-slider', name: '金属滑杆', en: 'Metal Slider', description: '刻度轨道 + 镀铬旋钮，支持拖拽与键盘。', tags: ['滑块'], component: ChromeSlider, raw: ChromeSliderRaw },
  ],
}
