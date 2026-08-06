import { ref } from 'vue'

export const rotatePreviewKey = ref(0)

export function rotatePreview() {
  rotatePreviewKey.value++
}
