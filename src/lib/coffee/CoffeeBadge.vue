<template>
  <div class="stage">
    <div class="wrap">
      <div class="stamp" aria-label="Roasted">
        <span class="inner" aria-hidden="true"></span>
        <span class="text">ROASTED</span>
      </div>
      <p class="hint">single origin · double stamped</p>
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
}
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.stamp {
  position: relative;
  color: #6f4e37;
  border: 3px double #6f4e37;
  border-radius: 6px;
  padding: 0.95rem 1.7rem;
  transform: rotate(-8deg);
  background-image:
    repeating-radial-gradient(circle at 4px 4px, rgba(111, 78, 55, 0.08) 0 1px, transparent 2px),
    repeating-radial-gradient(circle at 18px 11px, rgba(111, 78, 55, 0.06) 0 1px, transparent 2px);
  -webkit-mask-image: radial-gradient(130% 110% at 45% 35%, #000 72%, transparent 98%);
  mask-image: radial-gradient(130% 110% at 45% 35%, #000 72%, transparent 98%);
}
.inner {
  position: absolute;
  inset: 5px;
  border: 1px dashed rgba(111, 78, 55, 0.55);
  border-radius: 3px;
  pointer-events: none;
}
.text {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.34em;
  text-indent: 0.34em;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 rgba(111, 78, 55, 0.12);
}
.hint {
  margin: 0;
  font-family: ui-monospace, 'SF Mono', Consolas, monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  color: #b98a5e;
}
</style>
