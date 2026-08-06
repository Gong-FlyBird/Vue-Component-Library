<script setup lang="ts">
</script>

<template>
  <div class="bauhaus-loader" role="status" aria-label="loading">
    <span class="bauhaus-loader__ring bauhaus-loader__ring--outer"></span>
    <span class="bauhaus-loader__ring bauhaus-loader__ring--mid"></span>
    <span class="bauhaus-loader__ring bauhaus-loader__ring--inner"></span>
  </div>
</template>

<style scoped>
.bauhaus-loader {
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
}

.bauhaus-loader__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 999px;
}

.bauhaus-loader__ring--outer {
  width: 7.5rem;
  height: 7.5rem;
  border: 6px solid transparent;
  border-top-color: #e03a3e;
  border-right-color: #e03a3e;
  transform: translate(-50%, -50%);
  animation: bauhaus-spin-cw 1.6s linear infinite;
}

.bauhaus-loader__ring--mid {
  width: 5rem;
  height: 5rem;
  border: 5px solid transparent;
  border-bottom-color: #1d3f8f;
  border-left-color: #1d3f8f;
  transform: translate(-50%, -50%);
  animation: bauhaus-spin-ccw 1.1s linear infinite;
}

.bauhaus-loader__ring--inner {
  width: 2.7rem;
  height: 2.7rem;
  border: 4px solid transparent;
  border-top-color: #f2c400;
  border-right-color: #f2c400;
  transform: translate(-50%, -50%);
  animation: bauhaus-spin-cw 0.8s linear infinite;
}

@keyframes bauhaus-spin-cw {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes bauhaus-spin-ccw {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(-360deg); }
}
</style>
