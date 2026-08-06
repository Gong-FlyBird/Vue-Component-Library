<script setup lang="ts">
import { Leaf } from 'lucide-vue-next'
</script>

<template>
  <div class="stage">
    <article class="card">
      <header class="landscape" aria-hidden="true">
        <span class="sun"></span>
        <span class="hill hill--far"></span>
        <span class="hill hill--near"></span>
        <span class="flower"></span>
      </header>
      <div class="body">
        <div class="row">
          <span class="leaf"><Leaf :size="14" /></span>
          <h2 class="name">Totoro's Grove</h2>
        </div>
        <p class="desc">
          A sleepy corner of the valley where the catbus idles and the camphor
          tree hums its afternoon song. Perfect for a nap on the grass.
        </p>
      </div>
    </article>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #d8efe6;
  padding: 3rem 2rem;
  box-sizing: border-box;
}
.card {
  background: #fdf6e3;
  border: 2px solid #cde7f2;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(139, 94, 60, 0.12);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 34px rgba(139, 94, 60, 0.2);
}
.landscape {
  position: relative;
  height: 120px;
  background: linear-gradient(180deg, #a8d8ea 0%, #d8efe6 82%);
  overflow: hidden;
}
.sun {
  position: absolute;
  top: 14px;
  right: 28px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #fce9a8;
  box-shadow: 0 0 0 6px rgba(252, 233, 168, 0.4), 0 0 18px rgba(252, 233, 168, 0.8);
}
.hill {
  position: absolute;
  border-radius: 50%;
}
.hill--far {
  bottom: -46px;
  left: -14%;
  width: 68%;
  height: 120px;
  background: #c6e2a0;
}
.hill--near {
  bottom: -60px;
  right: -12%;
  width: 78%;
  height: 140px;
  background: #9dcb6f;
}
.flower {
  position: absolute;
  bottom: 16px;
  left: 24%;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #e76f51;
  box-shadow:
    5px -4px 0 0 #e76f51,
    -5px -4px 0 0 #e76f51,
    0 -8px 0 0 #e76f51;
  transform: scale(0.8);
}
.body {
  padding: 1.55rem 1.8rem 1.9rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}
.leaf {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eaf5dc;
  color: #7fb056;
  flex-shrink: 0;
}
.name {
  margin: 0;
  font-family: Georgia, 'Songti SC', serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: #8b5e3c;
}
.desc {
  margin: 0.8rem 0 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 13px;
  line-height: 1.75;
  color: #7a6a58;
}
</style>
