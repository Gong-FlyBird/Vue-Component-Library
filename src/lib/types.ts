import type { Component } from 'vue'

export interface LibComponentMeta {
  id: string
  name: string
  en: string
  description: string
  tags: string[]
  component: Component
  raw: string
}

export interface LibGroupMeta {
  id: string
  name: string
  en: string
  tagline: string
  theme: 'light' | 'dark'
  previewBg: string
  gradient: string
  components: LibComponentMeta[]
}
