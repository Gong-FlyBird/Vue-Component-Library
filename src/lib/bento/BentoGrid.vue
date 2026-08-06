<script setup lang="ts">
import BentoCard from './BentoCard.vue'
import BentoStats from './BentoStats.vue'
import { Sun, Wind, Music, Volume2, Rainbow, Flame, Leaf, Plus } from 'lucide-vue-next'

const bars = [34, 62, 88, 46, 74, 56, 100]

const hourly = [
  { time: 'Now', temp: '24°' },
  { time: '3PM', temp: '25°' },
  { time: '4PM', temp: '26°' },
  { time: '5PM', temp: '25°' },
  { time: '6PM', temp: '22°' },
]
</script>

<template>
  <div class="bento-grid">
    <BentoCard class="tile tile--weather" variant="dark">
      <template #icon>
        <Sun class="bento-grid__icon" :size="20" />
      </template>
      <div class="tile--weather__body">
        <div class="tile--weather__temp">
          <span class="tile--weather__big">24°</span>
          <div class="tile--weather__meta">
            <span>Sunny</span>
            <span class="tile--weather__meta-sub">Feels like 26°</span>
          </div>
        </div>
        <div class="tile--weather__wind">
          <Wind :size="16" />
          <span>12 km/h</span>
        </div>
        <div class="tile--weather__hours">
          <div v-for="h in hourly" :key="h.time" class="tile--weather__hour">
            <span class="tile--weather__hour-time">{{ h.time }}</span>
            <Sun class="tile--weather__hour-icon" :size="14" />
            <span class="tile--weather__hour-temp">{{ h.temp }}</span>
          </div>
        </div>
      </div>
    </BentoCard>

    <BentoCard class="tile tile--chart" variant="white" title="Weekly Sales" text="42% above last period">
      <template #icon>
        <span class="bento-grid__chip">$</span>
      </template>
      <div class="tile--chart__bars">
        <div v-for="(b, i) in bars" :key="i" class="tile--chart__bar-wrap">
          <span
            class="tile--chart__bar"
            :style="{ height: `${b}%` }"
            :title="String(b)"
          ></span>
        </div>
      </div>
    </BentoCard>

    <div class="tile tile--stats">
      <BentoStats :target="824" label="Active users" trend="up" />
    </div>

    <BentoCard class="tile tile--music" variant="white" title="Now Playing">
      <template #icon>
        <Music class="bento-grid__icon bento-grid__icon--pink" :size="18" />
      </template>
      <div class="tile--music__row">
        <Volume2 :size="16" class="bento-grid__icon bento-grid__icon--gray" />
        <div class="tile--music__eq">
          <span v-for="i in 5" :key="i" class="tile--music__bar"></span>
        </div>
        <button class="tile--music__add" type="button" aria-label="add to playlist">
          <Plus :size="14" />
        </button>
      </div>
    </BentoCard>

    <BentoCard class="tile tile--art" variant="gradient">
      <template #icon>
        <Rainbow class="bento-grid__icon" :size="18" />
      </template>
      <div class="tile--art__canvas">
        <span class="tile--art__orb tile--art__orb--a"></span>
        <span class="tile--art__orb tile--art__orb--b"></span>
        <span class="tile--art__ring"></span>
      </div>
      <h3 class="tile--art__title">Moodboard</h3>
    </BentoCard>

    <BentoCard class="tile tile--note" variant="white" title="Focus time">
      <template #icon>
        <Leaf class="bento-grid__icon bento-grid__icon--green" :size="18" />
      </template>
      <p class="tile--note__text">2h 10m deep work logged today. Keep the streak green.</p>
      <span class="tile--note__tag">#streak 14</span>
    </BentoCard>

    <BentoCard class="tile tile--flame" variant="dark" title="Active calories">
      <template #icon>
        <Flame class="bento-grid__icon bento-grid__icon--orange" :size="18" />
      </template>
      <div class="tile--flame__row">
        <span class="tile--flame__value">486</span>
        <span class="tile--flame__unit">kcal</span>
      </div>
      <div class="tile--flame__bar">
        <span class="tile--flame__fill"></span>
      </div>
      <span class="tile--flame__target">Goal 600</span>
    </BentoCard>
  </div>
</template>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 9.5rem;
  gap: 1rem;
  width: 100%;
  max-width: 100%;
}

.tile {
  min-width: 0;
}

.tile--weather {
  grid-column: span 2;
  grid-row: span 2;
}

.tile--chart {
  grid-column: span 2;
}

.tile--stats {
  grid-column: span 1;
}

.tile--music {
  grid-column: span 1;
}

.tile--art {
  grid-column: span 2;
}

.tile--note {
  grid-column: span 1;
}

.tile--flame {
  grid-column: span 1;
}

.bento-grid__icon {
  color: #ff9f0a;
}

.bento-grid__icon--pink {
  color: #ff375f;
}

.bento-grid__icon--green {
  color: #34c759;
}

.bento-grid__icon--orange {
  color: #ff9f0a;
}

.bento-grid__icon--gray {
  color: #86868b;
}

.bento-grid__chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 10px;
  background: #0a84ff;
  color: #fff;
  font-family: -apple-system, sans-serif;
  font-weight: 800;
  font-size: 0.9rem;
}

.tile--weather__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.9rem;
}

.tile--weather__temp {
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
}

.tile--weather__big {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 800;
  font-size: 3.4rem;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #f5f5f7;
}

.tile--weather__meta {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.4rem;
  font-family: -apple-system, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #f5f5f7;
}

.tile--weather__meta-sub {
  font-weight: 400;
  font-size: 0.75rem;
  color: #a1a1a6;
}

.tile--weather__wind {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: -apple-system, sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  color: #a1a1a6;
}

.tile--weather__hours {
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
  margin-top: auto;
}

.tile--weather__hour {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem 0.55rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  transition: background 200ms ease, transform 200ms ease;
}

.tile--weather__hour:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

.tile--weather__hour-time {
  font-family: -apple-system, sans-serif;
  font-size: 0.66rem;
  font-weight: 600;
  color: #a1a1a6;
}

.tile--weather__hour-icon {
  color: #ffd60a;
}

.tile--weather__hour-temp {
  font-family: -apple-system, sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #f5f5f7;
}

.tile--chart__bars {
  display: flex;
  align-items: flex-end;
  gap: 0.55rem;
  flex: 1;
  margin-top: 0.9rem;
}

.tile--chart__bar-wrap {
  flex: 1;
  display: flex;
  align-items: flex-end;
  height: 100%;
  background: rgba(10, 132, 255, 0.06);
  border-radius: 8px 8px 0 0;
}

.tile--chart__bar {
  width: 100%;
  border-radius: 6px 6px 0 0;
  background: linear-gradient(180deg, #0a84ff, #6e5bff);
  transition: transform 250ms ease, filter 250ms ease;
  transform-origin: bottom;
}

.tile--chart__bar:hover {
  transform: scaleY(1.06);
  filter: brightness(1.12);
}

.tile--music__row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: auto;
}

.tile--music__eq {
  display: flex;
  align-items: flex-end;
  gap: 0.22rem;
  flex: 1;
  height: 2.4rem;
}

.tile--music__bar {
  flex: 1;
  max-width: 0.7rem;
  border-radius: 3px;
  background: linear-gradient(180deg, #ff375f, #ff9f0a);
  animation: bento-eq 1.1s ease-in-out infinite;
}

.tile--music__bar:nth-child(1) { animation-delay: 0s; }
.tile--music__bar:nth-child(2) { animation-delay: 0.22s; }
.tile--music__bar:nth-child(3) { animation-delay: 0.44s; }
.tile--music__bar:nth-child(4) { animation-delay: 0.66s; }
.tile--music__bar:nth-child(5) { animation-delay: 0.88s; }

@keyframes bento-eq {
  0%, 100% { height: 22%; }
  50% { height: 95%; }
}

.tile--music__add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 999px;
  background: #f2f2f7;
  color: #1d1d1f;
  cursor: pointer;
  transition: transform 180ms ease, background 180ms ease;
}

.tile--music__add:hover {
  background: #e5e5ea;
  transform: scale(1.08);
}

.tile--music__add:active {
  transform: scale(0.94);
}

.tile--music__add:focus-visible {
  outline: 2px solid #0a84ff;
  outline-offset: 2px;
}

.tile--art {
  display: flex;
  flex-direction: column;
}

.tile--art__canvas {
  position: relative;
  flex: 1;
  min-height: 4.6rem;
  margin: 0.5rem 0 0.7rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.14);
  overflow: hidden;
}

.tile--art__orb {
  position: absolute;
  border-radius: 999px;
}

.tile--art__orb--a {
  width: 4.4rem;
  height: 4.4rem;
  top: -1.2rem;
  right: 0.6rem;
  background: radial-gradient(circle at 35% 30%, #fff7cc, #ffd60a 70%);
}

.tile--art__orb--b {
  width: 3rem;
  height: 3rem;
  bottom: -1rem;
  left: 1rem;
  background: radial-gradient(circle at 35% 30%, #dbf5ff, #64d2ff 70%);
}

.tile--art__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.6rem;
  height: 2.6rem;
  transform: translate(-50%, -50%) rotate(45deg);
  border: 2px solid rgba(255, 255, 255, 0.75);
}

.tile--art__title {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
}

.tile--note__text {
  margin: 0.3rem 0 0.5rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.8rem;
  line-height: 1.45;
  color: #86868b;
}

.tile--note__tag {
  margin-top: auto;
  align-self: flex-start;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(52, 199, 89, 0.14);
  color: #34c759;
  font-family: 'SF Mono', Consolas, monospace;
  font-size: 0.66rem;
  font-weight: 700;
}

.tile--flame__row {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-top: 0.7rem;
}

.tile--flame__value {
  font-family: -apple-system, sans-serif;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: -0.02em;
  color: #f5f5f7;
  font-variant-numeric: tabular-nums;
}

.tile--flame__unit {
  font-family: -apple-system, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #a1a1a6;
}

.tile--flame__bar {
  height: 0.45rem;
  margin-top: 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.tile--flame__fill {
  display: block;
  width: 81%;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #ff9f0a, #ff375f);
}

.tile--flame__target {
  margin-top: 0.4rem;
  font-family: -apple-system, sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #a1a1a6;
}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tile--weather,
  .tile--chart {
    grid-column: span 2;
  }

  .tile--stats,
  .tile--music,
  .tile--note,
  .tile--flame {
    grid-column: span 1;
  }

  .tile--art {
    grid-column: span 2;
  }
}
</style>
