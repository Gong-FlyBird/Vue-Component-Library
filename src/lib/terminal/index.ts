import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const TermButton = defineAsyncComponent(() => import('./TermButton.vue'))
import TermButtonRaw from './TermButton.vue?raw'
const TermCard = defineAsyncComponent(() => import('./TermCard.vue'))
import TermCardRaw from './TermCard.vue?raw'
const TermInput = defineAsyncComponent(() => import('./TermInput.vue'))
import TermInputRaw from './TermInput.vue?raw'
const TermProgress = defineAsyncComponent(() => import('./TermProgress.vue'))
import TermProgressRaw from './TermProgress.vue?raw'
const TermLog = defineAsyncComponent(() => import('./TermLog.vue'))
import TermLogRaw from './TermLog.vue?raw'

export const terminalGroup: LibGroupMeta = {
  id: 'terminal',
  name: '复古终端',
  en: 'CRT Terminal',
  tagline: '磷光绿 · 扫描线 · 等宽字体',
  theme: 'dark',
  previewBg: 'radial-gradient(120% 120% at 50% 0%, #101810 0%, #070b07 80%)',
  gradient: 'linear-gradient(135deg, #33ff66, #ffb454)',
  components: [
    { id: 'term-button', name: '终端按钮', en: 'Terminal Button', description: '等宽大写描边按钮，悬停反色（绿底黑字）。', tags: ['按钮'], component: TermButton, raw: TermButtonRaw },
    { id: 'term-card', name: 'CRT 窗口', en: 'CRT Window', description: '扫描线覆盖 + 磷光文字，开机日志逐行打字。', tags: ['卡片'], component: TermCard, raw: TermCardRaw },
    { id: 'term-input', name: '终端输入', en: 'Terminal Input', description: '$ 提示符 + 闪烁块状光标。', tags: ['输入'], component: TermInput, raw: TermInputRaw },
    { id: 'term-progress', name: 'ASCII 进度', en: 'ASCII Progress', description: '[=====>   ] 字符进度条，琥珀色。', tags: ['进度'], component: TermProgress, raw: TermProgressRaw },
    { id: 'term-log', name: '实时日志', en: 'Live Log', description: '持续追加 [OK]/[WARN]/[ERR] 日志行并自动滚动。', tags: ['日志'], component: TermLog, raw: TermLogRaw },
  ],
}
