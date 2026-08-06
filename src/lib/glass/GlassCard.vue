<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    name?: string
    role?: string
    bio?: string
  }>(),
  {
    name: 'Luna Aoki',
    role: 'Product Designer',
    bio: 'Crafting luminous interfaces at the edge of glass and light — currently exploring spatial UI systems and soft matter rendering.',
  },
)
</script>

<template>
  <article class="glass-card">
    <header class="glass-card__head">
      <span class="glass-card__avatar">{{ props.name.charAt(0) }}</span>
      <div class="glass-card__meta">
        <h3 class="glass-card__name">{{ props.name }}</h3>
        <p class="glass-card__role">{{ props.role }}</p>
      </div>
    </header>
    <p class="glass-card__bio">{{ props.bio }}</p>
    <footer class="glass-card__actions">
      <button type="button" class="glass-card__btn glass-card__btn--primary">
        Follow <ArrowRight class="glass-card__arrow" />
      </button>
      <button type="button" class="glass-card__btn glass-card__btn--ghost">Message</button>
    </footer>
  </article>
</template>

<style scoped>
.glass-card {
  position: relative;
  padding: 1.6rem 1.7rem 1.5rem;
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05) 60%);
  backdrop-filter: blur(22px) saturate(1.6);
  -webkit-backdrop-filter: blur(22px) saturate(1.6);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.22),
    inset 0 -14px 24px rgba(8, 12, 48, 0.18),
    0 18px 40px rgba(2, 8, 32, 0.45);
  color: #eaf1ff;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  transition:
    transform 250ms ease,
    box-shadow 250ms ease;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 26px 26px 0 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.glass-card:hover {
  transform: translateY(-6px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.26),
    inset 0 -14px 24px rgba(8, 12, 48, 0.14),
    0 26px 56px rgba(4, 10, 40, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.24),
    0 0 34px rgba(120, 160, 255, 0.18);
}

.glass-card__head {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.glass-card__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  font-size: 1.05rem;
  font-weight: 600;
  color: #f4f8ff;
  background: linear-gradient(135deg, #7fb2ff, #8f7bff);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 8px 20px rgba(64, 90, 220, 0.4);
}

.glass-card__name {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.glass-card__role {
  margin: 0.15rem 0 0;
  font-size: 0.78rem;
  color: rgba(234, 241, 255, 0.6);
}

.glass-card__bio {
  margin: 1.1rem 0 0;
  font-size: 0.85rem;
  line-height: 1.65;
  color: rgba(234, 241, 255, 0.75);
}

.glass-card__actions {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.3rem;
}

.glass-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.52rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition:
    background 200ms ease,
    transform 200ms ease,
    box-shadow 200ms ease;
}

.glass-card__btn:hover {
  transform: scale(1.03);
}

.glass-card__btn:active {
  transform: scale(0.96);
}

.glass-card__btn:focus-visible {
  outline: 2px solid #7db4ff;
  outline-offset: 2px;
}

.glass-card__arrow {
  width: 0.9rem;
  height: 0.9rem;
}

.glass-card__btn--primary {
  color: #eaf1ff;
  background: linear-gradient(180deg, rgba(118, 158, 255, 0.42), rgba(66, 104, 224, 0.3));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    0 8px 18px rgba(40, 70, 190, 0.35);
}

.glass-card__btn--primary:hover {
  background: linear-gradient(180deg, rgba(130, 168, 255, 0.52), rgba(78, 116, 235, 0.38));
}

.glass-card__btn--ghost {
  color: rgba(235, 241, 255, 0.85);
  background: rgba(255, 255, 255, 0.08);
}

.glass-card__btn--ghost:hover {
  background: rgba(255, 255, 255, 0.14);
}
</style>
