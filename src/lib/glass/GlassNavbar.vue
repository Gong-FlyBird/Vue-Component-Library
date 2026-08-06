<script setup lang="ts">
import { ref } from 'vue'
import { Bell, Search, User } from 'lucide-vue-next'

const links = ['Home', 'Explore', 'Library']
const active = ref('Home')
</script>

<template>
  <nav class="glass-nav">
    <div class="glass-nav__logo">
      <span class="glass-nav__dot"></span>
      <span class="glass-nav__name">Aurora</span>
    </div>
    <ul class="glass-nav__links">
      <li v-for="link in links" :key="link">
        <button
          type="button"
          class="glass-nav__link"
          :class="{ 'glass-nav__link--active': active === link }"
          @click="active = link"
        >
          {{ link }}
        </button>
      </li>
    </ul>
    <div class="glass-nav__tools">
      <span class="glass-nav__search">
        <Search />
        <span class="glass-nav__search-text">Search</span>
      </span>
      <button type="button" class="glass-nav__bell" aria-label="Notifications">
        <Bell />
        <span class="glass-nav__ping"></span>
      </button>
      <span class="glass-nav__avatar" aria-hidden="true">
        <User />
      </span>
    </div>
  </nav>
</template>

<style scoped>
.glass-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(20, 26, 58, 0.4);
  backdrop-filter: blur(20px) saturate(1.5);
  -webkit-backdrop-filter: blur(20px) saturate(1.5);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 16px 36px rgba(2, 8, 32, 0.5);
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.glass-nav__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 0.4rem;
  flex-shrink: 0;
}

.glass-nav__dot {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #7fb2ff, #8f7bff);
  box-shadow:
    0 0 10px rgba(125, 160, 255, 0.9),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.glass-nav__name {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #eaf1ff;
}

.glass-nav__links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.glass-nav__link {
  padding: 0.42rem 0.9rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: rgba(234, 241, 255, 0.65);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 200ms ease,
    color 200ms ease,
    box-shadow 200ms ease;
}

.glass-nav__link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(234, 241, 255, 0.9);
}

.glass-nav__link--active {
  background: linear-gradient(180deg, rgba(118, 158, 255, 0.42), rgba(66, 104, 224, 0.3));
  color: #ffffff;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    0 6px 14px rgba(40, 70, 190, 0.35);
}

.glass-nav__tools {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-left: auto;
  flex-shrink: 0;
}

.glass-nav__search {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.42rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(234, 241, 255, 0.65);
  font-size: 0.8rem;
}

.glass-nav__search :deep(svg) {
  width: 0.85rem;
  height: 0.85rem;
}

.glass-nav__bell {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  color: rgba(234, 241, 255, 0.8);
  cursor: pointer;
  transition: background 200ms ease, transform 200ms ease;
}

.glass-nav__bell :deep(svg) {
  width: 0.95rem;
  height: 0.95rem;
}

.glass-nav__bell:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: scale(1.05);
}

.glass-nav__bell:focus-visible {
  outline: 2px solid #7db4ff;
  outline-offset: 2px;
}

.glass-nav__ping {
  position: absolute;
  top: 0.35rem;
  right: 0.4rem;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: #ff6b81;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 8px rgba(255, 107, 129, 0.9);
}

.glass-nav__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.95rem;
  height: 1.95rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: linear-gradient(135deg, #7fb2ff, #8f7bff);
  color: #f4f8ff;
  box-shadow: 0 4px 12px rgba(64, 90, 220, 0.4);
}

.glass-nav__avatar :deep(svg) {
  width: 0.9rem;
  height: 0.9rem;
}

@media (max-width: 540px) {
  .glass-nav__links {
    display: none;
  }

  .glass-nav__search-text {
    display: none;
  }

  .glass-nav__search {
    padding: 0.5rem;
  }
}
</style>
