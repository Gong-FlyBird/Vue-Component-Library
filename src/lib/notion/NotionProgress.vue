<script setup lang="ts">
import { onMounted, ref } from 'vue'

const pct = ref(0)

onMounted(() => {
  setTimeout(() => {
    pct.value = 64
  }, 150)
})
</script>

<template>
  <div class="stage">
    <div class="row">
      <div class="track" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100">
        <div class="fill" :style="{ width: pct + '%' }"></div>
      </div>
      <span class="pct">{{ pct }}%</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #ffffff;
  padding: 3rem 2rem;
  box-sizing: border-box;
}
.row {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  max-width: 340px;
  margin: 0 auto;
}
.track {
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: #e9e9e7;
  overflow: hidden;
}
.fill {
  height: 100%;
  border-radius: 999px;
  background: #2383e2;
  transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}
.pct {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: #9b9a97;
  min-width: 2.4em;
  text-align: right;
}
</style>
