<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <div class="stage">
    <article class="card">
      <p class="kicker">Essay · No. 12</p>
      <h2 class="title">The stillness of empty rooms</h2>
      <p class="body">
        Nothing here shouts. Light falls quietly, dust settles slowly, and the
        space between objects holds its own weight. Enough is a discipline
        practiced daily, one small room at a time.
      </p>
      <a class="link" href="#">
        Read the essay
        <ArrowUpRight :size="13" />
      </a>
    </article>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #f7f5ef;
  padding: 3rem 2rem;
  box-sizing: border-box;
}
.card {
  background: #fbfaf5;
  border: 1px solid #e3ddcf;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(61, 58, 52, 0.05);
  padding: 2.75rem 2.5rem;
}
.kicker {
  margin: 0 0 1.1rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  font-variant: small-caps;
  letter-spacing: 0.24em;
  color: #8c8577;
}
.title {
  margin: 0 0 1.1rem;
  font-family: 'Songti SC', 'Noto Serif SC', Georgia, serif;
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.45;
  color: #3d3a34;
}
.body {
  margin: 0 0 1.8rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 0.85rem;
  line-height: 2;
  color: #8c8577;
}
.link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: #9c7c5c;
  transition: color 0.3s ease;
}
.link:hover {
  color: #3d3a34;
}
</style>
