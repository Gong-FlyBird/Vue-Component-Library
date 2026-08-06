import { ref } from 'vue'

const KEY = 'atelier-favs'
export const favorites = ref<Set<string>>(new Set(JSON.parse(localStorage.getItem(KEY) || '[]') as string[]))

function persist() {
  localStorage.setItem(KEY, JSON.stringify([...favorites.value]))
}

export function toggleFavorite(id: string) {
  if (favorites.value.has(id)) favorites.value.delete(id)
  else favorites.value.add(id)
  persist()
}
