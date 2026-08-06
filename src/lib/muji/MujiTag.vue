<template>
  <div class="stage">
    <div class="wrap">
      <span class="tag">
        <span class="dot" aria-hidden="true"></span>
        <slot>Kyoto · 1962</slot>
      </span>
      <p class="hint">a small note</p>
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
}
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
}
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 1.1rem;
  border: 1px solid #d8d2c4;
  border-radius: 999px;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #8c8577;
  cursor: default;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.hint {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #b3ac9e;
}
.tag:hover {
  background: #eee9de;
  color: #3d3a34;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9c7c5c;
  transition: background-color 0.3s ease;
}
.tag:hover .dot {
  background: #3d3a34;
}
</style>
