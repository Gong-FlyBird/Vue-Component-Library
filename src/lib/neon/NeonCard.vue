<script setup lang="ts">
import { Zap } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    title?: string
    tag?: string
    code?: string
  }>(),
  {
    title: 'NIGHT CITY NODE',
    tag: 'SYS.ACTIVE',
    code: '0x0AF7-42',
  },
)
</script>

<template>
  <div class="neon-card">
    <span class="neon-card__corner neon-card__corner--tl" aria-hidden="true"></span>
    <span class="neon-card__corner neon-card__corner--br" aria-hidden="true"></span>

    <header class="neon-card__head">
      <h3 class="neon-card__title">{{ title }}</h3>
      <Zap class="neon-card__icon" :size="18" aria-hidden="true" />
    </header>

    <div class="neon-card__body">
      <slot>
        <p class="neon-card__text">
          Uplink stabilized. Latency 12ms, grid channel encrypted, all daemons
          nominal. Ready for handoff on your signal.
        </p>
      </slot>
    </div>

    <footer class="neon-card__foot">
      <span class="neon-card__tag">{{ tag }}</span>
      <span class="neon-card__code">{{ code }}</span>
    </footer>
  </div>
</template>

<style scoped>
.neon-card {
  position: relative;
  max-width: 100%;
  padding: 1.35rem 1.4rem 1rem;
  background:
    linear-gradient(rgba(0, 240, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.028) 1px, transparent 1px),
    rgba(9, 13, 24, 0.92);
  background-size: 22px 22px;
  border: 1px solid rgba(0, 240, 255, 0.16);
  border-radius: 8px;
  box-shadow:
    inset 0 0 0 1px rgba(0, 240, 255, 0.05),
    inset 0 0 30px rgba(0, 240, 255, 0.05),
    0 0 26px rgba(0, 240, 255, 0.07);
}

.neon-card__corner {
  position: absolute;
  width: 13px;
  height: 13px;
  border: 1px solid rgba(0, 240, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.55);
}

.neon-card__corner--tl {
  top: -1px;
  left: -1px;
  border-right: none;
  border-bottom: none;
  border-radius: 8px 0 0 0;
}

.neon-card__corner--br {
  bottom: -1px;
  right: -1px;
  border-left: none;
  border-top: none;
  border-color: rgba(255, 46, 196, 0.8);
  box-shadow: 0 0 10px rgba(255, 46, 196, 0.55);
  border-radius: 0 0 8px 0;
}

.neon-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.neon-card__title {
  margin: 0;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #e8fdff;
  text-shadow: 0 0 12px rgba(0, 240, 255, 0.7);
}

.neon-card__icon {
  color: #00f0ff;
  filter: drop-shadow(0 0 6px rgba(0, 240, 255, 0.8));
}

.neon-card__body {
  margin-top: 1rem;
}

.neon-card__text {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.7;
  color: #8fa7ba;
}

.neon-card__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.2rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(0, 240, 255, 0.12);
}

.neon-card__tag {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #7dff5a;
  text-shadow: 0 0 8px rgba(125, 255, 90, 0.6);
}

.neon-card__code {
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  color: #6a5bff;
  text-shadow: 0 0 8px rgba(106, 91, 255, 0.6);
}
</style>
