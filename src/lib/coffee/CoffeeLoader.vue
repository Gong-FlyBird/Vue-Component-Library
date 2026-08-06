<template>
  <div class="stage">
    <div class="scene" role="status" aria-label="Brewing">
      <div class="steam" aria-hidden="true">
        <span class="wisp wisp--a"></span>
        <span class="wisp wisp--b"></span>
        <span class="wisp wisp--c"></span>
      </div>
      <div class="cup">
        <span class="surface" aria-hidden="true"></span>
        <span class="handle" aria-hidden="true"></span>
      </div>
      <div class="saucer" aria-hidden="true"></div>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 260px;
}
.scene {
  position: relative;
  padding-top: 70px;
}
.steam {
  position: absolute;
  bottom: 44px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 64px;
}
.wisp {
  position: absolute;
  bottom: 0;
  width: 9px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(244, 234, 216, 0.85) 45%,
    transparent 100%
  );
  filter: blur(3px);
  opacity: 0;
  animation: steam 1.9s ease-out infinite;
}
.wisp--a {
  left: 1px;
  animation-delay: 0s;
}
.wisp--b {
  left: 18px;
  animation-delay: 0.55s;
}
.wisp--c {
  left: 34px;
  animation-delay: 1.1s;
}
@keyframes steam {
  0% {
    transform: translateY(8px) scaleX(0.7);
    opacity: 0;
  }
  30% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-34px) translateX(4px) scaleX(1.2);
    opacity: 0;
  }
}
.cup {
  position: relative;
  width: 66px;
  height: 42px;
  background: linear-gradient(180deg, #7d5740 0%, #6f4e37 100%);
  border-radius: 5px 5px 15px 15px;
  z-index: 1;
}
.surface {
  position: absolute;
  top: 7px;
  left: 10%;
  right: 10%;
  height: 6px;
  border-radius: 3px;
  background: #3a2a1e;
}
.handle {
  position: absolute;
  top: 9px;
  right: -15px;
  width: 20px;
  height: 20px;
  border: 4px solid #6f4e37;
  border-left: none;
  border-radius: 0 12px 12px 0;
}
.saucer {
  position: relative;
  width: 100px;
  height: 13px;
  margin: -2px auto 0;
  border-radius: 999px;
  background: linear-gradient(180deg, #7d5740 0%, #6f4e37 70%);
  box-shadow: 0 12px 16px rgba(58, 42, 30, 0.3);
}
.saucer::before {
  content: '';
  position: absolute;
  left: 8%;
  right: 8%;
  top: 3px;
  height: 4px;
  border-radius: 999px;
  background: rgba(244, 234, 216, 0.35);
}
</style>
