<template>
  <div class="stage">
    <div class="sky" aria-label="A cloud drifts by">
      <div class="cloud">
        <span class="puff puff--l" aria-hidden="true"></span>
        <span class="puff puff--r" aria-hidden="true"></span>
        <span class="base" aria-hidden="true"></span>
      </div>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 240px;
}
.sky {
  position: relative;
  width: 260px;
  height: 64px;
  border-radius: 999px;
  background: linear-gradient(180deg, #c9e7f4 0%, #a8d8ea 100%);
  box-shadow: inset 0 2px 6px rgba(120, 170, 200, 0.35);
  overflow: hidden;
}
.cloud {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 92px;
  height: 42px;
  animation: drift 5s ease-in-out infinite;
}
.puff {
  position: absolute;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #fff;
  filter: blur(3px);
}
.puff--l {
  left: 0;
  top: 1px;
}
.puff--r {
  right: 0;
  top: 5px;
}
.base {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 0;
  height: 24px;
  border-radius: 999px;
  background: #fff;
  filter: blur(3px);
}
@keyframes drift {
  0%,
  100% {
    transform: translate(-74%, -50%) translateY(0);
  }
  25% {
    transform: translate(-60%, -50%) translateY(-4px);
  }
  50% {
    transform: translate(-42%, -50%) translateY(0);
  }
  75% {
    transform: translate(-56%, -50%) translateY(-2px);
  }
}
</style>
