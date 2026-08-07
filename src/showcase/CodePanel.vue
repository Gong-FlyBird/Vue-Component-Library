<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { FileCode2, Download } from 'lucide-vue-next'
import { highlightSfc } from './highlight'
import { copyText } from './composables/useClipboard'
import { pushToast } from './composables/useToast'
import CopyBtn from './CopyBtn.vue'

const props = defineProps<{
  id: string
  name: string
  en: string
  raw: string
}>()

const langMap: Record<string, string> = {
  template: 'TEMPLATE',
  script: 'SCRIPT',
  style: 'STYLE',
}

interface Tab {
  label: string
  lang: string
  code: string
  raw: string
}

const tabs = ref<Tab[]>([])
const activeTab = ref(0)
const htmlCache = new Map<string, string>()

function buildTabs() {
  const raw = props.raw
  const scriptMatch = raw.match(/<script setup lang="ts">([\s\S]*?)<\/script>/)
  const styleMatch = raw.match(/<style scoped>([\s\S]*?)<\/style>/)
  const templateMatch = raw.match(/<template>([\s\S]*?)<\/template>/)
  tabs.value = [
    templateMatch && { label: 'Template', lang: 'template', code: templateMatch[1].trim(), raw: templateMatch[0] },
    scriptMatch && { label: 'Script', lang: 'script', code: scriptMatch[1].trim(), raw: scriptMatch[0] },
    styleMatch && { label: 'Style', lang: 'style', code: styleMatch[1].trim(), raw: styleMatch[0] },
  ].filter(Boolean) as Tab[]
  activeTab.value = 0
}

function htmlFor(tab: Tab): string {
  const key = tab.lang + ':' + tab.code.length
  if (htmlCache.has(key)) return htmlCache.get(key)!
  const html = highlightSfc(tab.raw)
  htmlCache.set(key, html)
  return html
}

const full = computed(() => props.raw)

async function downloadFile() {
  const blob = new Blob([full.value], { type: 'text/x-vue' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${props.id}.vue`
  a.click()
  URL.revokeObjectURL(url)
  pushToast('文件已下载')
}

function copyAll() {
  copyText(full.value).then((ok) => {
    if (ok) pushToast('完整源码已复制')
  })
}

onMounted(() => {
  buildTabs()
})
</script>

<template>
  <div class="code-panel">
    <div class="code-head">
      <div class="tabs">
        <button
          v-for="(t, i) in tabs"
          :key="t.lang"
          class="tab mono"
          :class="{ active: activeTab === i }"
          @click="activeTab = i"
        >
          {{ t.label }} <span class="tab-lang">{{ langMap[t.lang] }}</span>
        </button>
      </div>
      <div class="actions">
        <CopyBtn :text="tabs[activeTab]?.raw || ''" label="复制本段" />
        <button class="action mono" @click="copyAll">
          <FileCode2 :size="13" />
          复制全部
        </button>
        <button class="action mono" @click="downloadFile">
          <Download :size="13" />
          下载 .vue
        </button>
      </div>
    </div>
    <div class="code-body">
      <div v-for="(t, i) in tabs" :key="t.lang" v-show="activeTab === i" class="code-scroll">
        <pre v-html="htmlFor(t)"></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-panel {
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
}
.code-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0 12px;
  border-bottom: 1px solid var(--line);
  background: var(--bg-2);
}
.tabs {
  display: flex;
  gap: 18px;
}
.tab {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 11px 2px;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  color: var(--ink-3);
  border-bottom: 2px solid transparent;
  transition: all 0.18s ease;
}
.tab:hover {
  color: var(--ink-2);
}
.tab.active {
  color: var(--ink);
  border-bottom-color: var(--accent);
}
.tab-lang {
  font-size: 8.5px;
  color: var(--ink-3);
  letter-spacing: 0.1em;
}
.actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  padding: 6px 0;
}
.action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 10.5px;
  letter-spacing: 0.08em;
  padding: 7px 12px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  color: var(--ink-2);
  transition: all 0.18s ease;
}
.action:hover {
  color: var(--ink);
  border-color: var(--line-strong);
}
.code-scroll {
  max-height: 520px;
  overflow: auto;
  padding: 16px 18px;
}
pre {
  font-family: var(--mono);
  font-size: 12.5px;
  line-height: 1.75;
  color: var(--ink);
  white-space: pre;
}
</style>
