<template>
  <div class="stage">
    <div class="hang">
      <span class="string" aria-hidden="true"></span>
      <span class="knot" aria-hidden="true"></span>
      <div class="tag">
        <span class="hole" aria-hidden="true"></span>
        <p class="line-a">HOUSE BLEND</p>
        <p class="line-b">Est. 1987</p>
      </div>
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
.hang {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.string {
  width: 1.5px;
  height: 26px;
  background: #6f4e37;
}
.knot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6f4e37;
  margin-bottom: 4px;
}
.tag {
  position: relative;
  background: #f4ead8;
  border: 2px solid #6f4e37;
  border-radius: 6px;
  padding: 1.3rem 1.6rem 1.4rem;
  transform: rotate(-4deg);
  box-shadow: 0 4px 10px rgba(95, 64, 44, 0.18);
}
.hole {
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border: 2px solid #6f4e37;
  border-radius: 50%;
  background: #e8dcc6;
}
.line-a {
  margin: 0 0 0.35rem;
  font-family: ui-monospace, 'SF Mono', Consolas, monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #3a2a1e;
  white-space: nowrap;
}
.line-b {
  margin: 0;
  font-family: Georgia, 'Songti SC', serif;
  font-style: italic;
  font-size: 12px;
  color: #b98a5e;
  text-align: center;
}
</style>
