<template>
  <div class="stage">
    <div class="wrap">
      <span class="badge">
        <span class="dot" aria-hidden="true"></span>
        <slot>Hand-glazed</slot>
      </span>
      <p class="hint">quietly labeled</p>
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
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 1rem;
  border: 1px solid #d8d2c4;
  border-radius: 999px;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #3d3a34;
  cursor: default;
  transition: border-color 0.3s ease;
}
.badge:hover {
  border-color: #9c7c5c;
}
.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #9c7c5c;
  transition: background-color 0.3s ease;
}
.hint {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #b3ac9e;
}
</style>
