<template>
  <div class="stage">
    <div class="wrap">
      <span class="tag">
        <span class="leaf-dot" aria-hidden="true"></span>
        <slot>Fresh &amp; gentle</slot>
      </span>
      <p class="hint">picked this morning</p>
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
}
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  background: #e6f4fa;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #8b5e3c;
  box-shadow: inset 0 0 0 1px rgba(168, 216, 234, 0.6);
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.tag:hover {
  background: #d9effa;
  transform: translateY(-1px);
}
.leaf-dot {
  width: 7px;
  height: 12px;
  border-radius: 100% 0 100% 0;
  background: #9dcb6f;
  transform: rotate(-40deg);
}
.hint {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 11px;
  color: #8fbfae;
}
</style>
