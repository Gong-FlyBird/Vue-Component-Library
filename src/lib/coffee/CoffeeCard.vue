<script setup lang="ts">
import { Coffee } from 'lucide-vue-next'
</script>

<template>
  <div class="stage">
    <article class="card">
      <div class="beans" aria-hidden="true"></div>
      <header class="head">
        <div class="tags">
          <span class="tag">ORIGIN · COLOMBIA</span>
          <span class="tag">ROAST · MEDIUM</span>
        </div>
        <span class="price">$16</span>
      </header>
      <h2 class="name">La Esperanza</h2>
      <p class="note">washed · chocolate, honey, tangerine</p>
      <footer class="foot">
        <span class="batch">Batch 041 — roasted on site</span>
        <Coffee :size="17" class="cup" />
      </footer>
    </article>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #e8dcc6;
  padding: 3rem 2rem;
  box-sizing: border-box;
}
.card {
  position: relative;
  background: #f4ead8;
  border: 1.5px dashed rgba(111, 78, 55, 0.45);
  border-radius: 10px;
  padding: 2.1rem 2.2rem;
  overflow: hidden;
}
.beans {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 8% 10%, rgba(185, 138, 94, 0.35) 0 2px, transparent 3px),
    radial-gradient(circle at 92% 14%, rgba(185, 138, 94, 0.3) 0 2px, transparent 3px),
    radial-gradient(circle at 14% 88%, rgba(185, 138, 94, 0.3) 0 2px, transparent 3px),
    radial-gradient(circle at 88% 82%, rgba(185, 138, 94, 0.35) 0 2px, transparent 3px);
}
.head {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  font-family: ui-monospace, 'SF Mono', Consolas, monospace;
  font-size: 9px;
  letter-spacing: 0.1em;
  color: #6f4e37;
  border: 1px solid rgba(111, 78, 55, 0.45);
  border-radius: 3px;
  padding: 0.25rem 0.55rem;
  background: rgba(244, 234, 216, 0.7);
}
.price {
  position: relative;
  font-family: Georgia, 'Songti SC', serif;
  font-style: italic;
  font-size: 1.35rem;
  font-weight: 700;
  color: #6f4e37;
  border: 1px solid #6f4e37;
  border-radius: 4px;
  padding: 0.15rem 0.55rem;
  box-shadow: inset 0 0 0 1px #6f4e37;
  transform: rotate(-5deg);
}
.name {
  position: relative;
  margin: 1.2rem 0 0.25rem;
  font-family: Georgia, 'Songti SC', serif;
  font-style: italic;
  font-size: 1.65rem;
  font-weight: 600;
  color: #3a2a1e;
}
.note {
  position: relative;
  margin: 0;
  font-family: ui-monospace, 'SF Mono', Consolas, monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
  color: #b98a5e;
}
.foot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.7rem;
  padding-top: 1.1rem;
  border-top: 1px dashed rgba(111, 78, 55, 0.4);
}
.batch {
  font-family: ui-monospace, 'SF Mono', Consolas, monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  color: #6f4e37;
}
.cup {
  color: #6f4e37;
}
</style>
