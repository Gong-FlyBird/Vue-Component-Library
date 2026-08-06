<template>
  <div class="stage">
    <div class="starburst" aria-label="Magic">
      <span class="star star--a" aria-hidden="true"></span>
      <span class="star star--b" aria-hidden="true"></span>
      <span class="label">MAGIC</span>
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
.starburst {
  position: relative;
  width: 94px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.starburst:hover {
  transform: rotate(10deg) scale(1.05);
}
.star {
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, #f4895f 0%, #e76f51 60%, #d95f43 100%);
  box-shadow: 0 6px 14px rgba(231, 111, 81, 0.4);
}
.star--a {
  transform: scale(0.94);
}
.star--b {
  transform: rotate(45deg) scale(0.94);
}
.star--b::after {
  content: '';
  position: absolute;
  inset: 26%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
}
.label {
  position: relative;
  z-index: 2;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  color: #fdf6e3;
  text-shadow: 0 1px 2px rgba(120, 40, 20, 0.35);
}
</style>
