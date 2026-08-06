<script setup lang="ts">
</script>

<template>
  <div class="deco-divider" role="separator" aria-hidden="true">
    <span class="deco-divider__line"></span>
    <span class="deco-divider__ray-group">
      <span class="deco-divider__ray" v-for="i in 3" :key="i"></span>
    </span>
    <span class="deco-divider__diamond deco-divider__diamond--outer">
      <span class="deco-divider__diamond deco-divider__diamond--inner"></span>
    </span>
    <span class="deco-divider__ray-group deco-divider__ray-group--right">
      <span class="deco-divider__ray" v-for="i in 3" :key="i"></span>
    </span>
    <span class="deco-divider__line"></span>
  </div>
</template>

<style scoped>
.deco-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  width: 100%;
}

.deco-divider__line {
  flex: 1;
  max-width: 8rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37);
}

.deco-divider__line:last-of-type {
  transform: scaleX(-1);
}

.deco-divider__ray-group {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.deco-divider__ray-group--right {
  transform: scaleX(-1);
}

.deco-divider__ray {
  display: block;
  width: 0.14rem;
  height: 1.05rem;
  background: #d4af37;
}

.deco-divider__ray:nth-child(2) {
  height: 1.55rem;
}

.deco-divider__diamond {
  width: 0.55rem;
  height: 0.55rem;
  transform: rotate(45deg);
}

.deco-divider__diamond--outer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.15rem;
  height: 1.15rem;
  border: 1px solid #d4af37;
}

.deco-divider__diamond--inner {
  width: 0.5rem;
  height: 0.5rem;
  background: #d4af37;
}
</style>
