<template>
  <div class="stage">
    <div class="loader" role="status" aria-label="Loading">
      <div class="dots">
        <span
          v-for="i in 3"
          :key="i"
          class="dot"
          :style="{ animationDelay: `${(i - 1) * 0.18}s` }"
        ></span>
      </div>
      <p class="hint">breathing</p>
    </div>
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
  display: flex;
  justify-content: center;
  min-height: 240px;
  align-items: center;
}
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
}
.dots {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3d3a34;
  animation: breathe 1.6s ease-in-out infinite;
}
.hint {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #b3ac9e;
}
@keyframes breathe {
  0%,
  100% {
    opacity: 0.22;
    transform: scale(0.72);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
