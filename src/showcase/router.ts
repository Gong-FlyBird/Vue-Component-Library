import { ref, watch } from 'vue'

export type Route =
  | { name: 'home' }
  | { name: 'component'; id: string }

const route = ref<Route>({ name: 'home' })

function parse(): Route {
  const hash = location.hash.replace(/^#\/?/, '')
  if (!hash) return { name: 'home' }
  if (hash.startsWith('component/')) return { name: 'component', id: hash.slice('component/'.length) }
  return { name: 'home' }
}

route.value = parse()

window.addEventListener('hashchange', () => {
  route.value = parse()
  window.scrollTo({ top: 0 })
})

export function navigate(r: Route) {
  if (r.name === 'home') history.pushState(null, '', '#/')
  else history.pushState(null, '', `#/component/${r.id}`)
  route.value = parse()
  window.scrollTo({ top: 0 })
}

watch(route, (r) => {
  if (r.name === 'home') {
    if (location.hash !== '#/') history.pushState(null, '', '#/')
  } else if (location.hash !== `#/component/${r.id}`) {
    history.pushState(null, '', `#/component/${r.id}`)
  }
})

export function useRoute() {
  return route
}
