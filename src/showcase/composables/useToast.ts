import { ref } from 'vue'

export interface Toast {
  id: number
  message: string
  icon?: string
  type?: 'success' | 'info' | 'warn'
}

let seed = 0
export const toasts = ref<Toast[]>([])

export function pushToast(message: string, type: Toast['type'] = 'success', icon?: string) {
  const id = ++seed
  toasts.value.push({ id, message, type, icon })
  setTimeout(() => dismiss(id), 2600)
}

export function dismiss(id: number) {
  toasts.value = toasts.value.filter((t) => t.id !== id)
}
