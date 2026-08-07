<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import TopBar from './TopBar.vue'
import Sidebar from './Sidebar.vue'
import HomeView from './HomeView.vue'
import ComponentDetail from './ComponentDetail.vue'
import ToastHost from './ToastHost.vue'
import { useRoute } from './router'

const route = useRoute()
const sidebarRef = ref<InstanceType<typeof Sidebar>>()
const sidebarOpen = ref(false)
const isDesktop = ref(window.innerWidth > 860)

function onResize() {
  isDesktop.value = window.innerWidth > 860
  if (isDesktop.value) sidebarOpen.value = false
}

function onKey(e: KeyboardEvent) {
  const target = e.target as HTMLElement
  const typing = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'
  if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    sidebarRef.value?.focusSearch()
  } else if (e.key === '/' && !typing) {
    e.preventDefault()
    sidebarRef.value?.focusSearch()
  } else if (e.key === 'Escape') {
    sidebarOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', onResize)
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div class="shell">
    <TopBar @menu="sidebarOpen = !sidebarOpen" />
    <div class="layout" :class="{ 'sidebar-open': sidebarOpen }">
      <div class="sidebar-wrap">
        <Sidebar ref="sidebarRef" />
      </div>
      <div v-if="sidebarOpen" class="scrim" @click="sidebarOpen = false" />
      <main class="main">
        <Transition name="page" mode="out-in">
          <HomeView v-if="route.name === 'home'" :key="'home'" />
          <ComponentDetail v-else-if="route.name === 'component'" :id="route.id" :key="route.id" />
        </Transition>
      </main>
    </div>
    <ToastHost />
  </div>
</template>

<style scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.layout {
  flex: 1;
  display: flex;
  min-height: 0;
}
.sidebar-wrap {
  width: 264px;
  flex-shrink: 0;
  border-right: 1px solid var(--line);
  background: var(--bg-2);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.main {
  flex: 1;
  min-width: 0;
  padding: 26px 40px 0;
}
.scrim {
  display: none;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
@media (max-width: 860px) {
  .sidebar-wrap {
    position: fixed;
    top: 52px;
    bottom: 0;
    left: 0;
    z-index: 90;
    transform: translateX(-102%);
    box-shadow: var(--shadow);
  }
  .sidebar-open .sidebar-wrap {
    transform: translateX(0);
  }
  .scrim {
    display: block;
    position: fixed;
    inset: 52px 0 0 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 80;
  }
  .main {
    padding: 18px 16px 0;
  }
}
</style>
