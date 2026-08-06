import type { LibGroupMeta } from '../types'
import { defineAsyncComponent } from 'vue'
const NotionButton = defineAsyncComponent(() => import('./NotionButton.vue'))
import NotionButtonRaw from './NotionButton.vue?raw'
const NotionCard = defineAsyncComponent(() => import('./NotionCard.vue'))
import NotionCardRaw from './NotionCard.vue?raw'
const NotionInput = defineAsyncComponent(() => import('./NotionInput.vue'))
import NotionInputRaw from './NotionInput.vue?raw'
const NotionProgress = defineAsyncComponent(() => import('./NotionProgress.vue'))
import NotionProgressRaw from './NotionProgress.vue?raw'
const NotionBlock = defineAsyncComponent(() => import('./NotionBlock.vue'))
import NotionBlockRaw from './NotionBlock.vue?raw'

export const notionGroup: LibGroupMeta = {
  id: 'notion',
  name: '文档工作流',
  en: 'Notion Style',
  tagline: '文档编辑 · 素白线条 · 专注',
  theme: 'light',
  previewBg: 'linear-gradient(180deg, #ffffff 0%, #f4f4f6 100%)',
  gradient: 'linear-gradient(135deg, #2383e2, #8ab8f0)',
  components: [
    { id: 'notion-button', name: '文档按钮', en: 'Notion Button', description: '素白细边按钮，悬停浅灰，蓝色强调变体。', tags: ['按钮'], component: NotionButton, raw: NotionButtonRaw },
    { id: 'notion-card', name: '文档页卡', en: 'Page Card', description: '页面卡片：可勾选清单、引用块与头像堆叠。', tags: ['卡片'], component: NotionCard, raw: NotionCardRaw },
    { id: 'notion-input', name: '无框输入', en: 'Borderless Input', description: '无边框输入，聚焦时蓝色底线左至右展开。', tags: ['输入'], component: NotionInput, raw: NotionInputRaw },
    { id: 'notion-progress', name: '文档进度', en: 'Doc Progress', description: '细进度条，蓝色填充与百分比实时显示。', tags: ['进度'], component: NotionProgress, raw: NotionProgressRaw },
    { id: 'notion-block', name: '可编辑块', en: 'Editable Block', description: '悬停显示拖动把手与 / 命令提示的文档块。', tags: ['文档'], component: NotionBlock, raw: NotionBlockRaw },
  ],
}
