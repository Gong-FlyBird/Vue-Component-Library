import { ref, watchEffect } from 'vue'

const KEY = 'atelier-theme'
export const theme = ref<'dark' | 'light'>(
  (localStorage.getItem(KEY) as 'dark' | 'light') || 'dark',
)

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value
  localStorage.setItem(KEY, theme.value)
})

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
