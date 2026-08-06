<script setup lang="ts">
</script>

<template>
  <figure class="deco-frame">
    <div class="deco-frame__bevel">
      <div class="deco-frame__mat">
        <div class="deco-frame__art">
          <span class="deco-frame__fan" aria-hidden="true"></span>
          <span class="deco-frame__ring" aria-hidden="true"></span>
        </div>
      </div>
    </div>
    <figcaption class="deco-frame__base">
      <span class="deco-frame__plaque">GOLDEN ERA</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.deco-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  max-width: 100%;
}

.deco-frame__bevel {
  position: relative;
  padding: 0.9rem;
  background: linear-gradient(135deg, #f2e2ae 0%, #d4af37 45%, #8a6d1c 100%);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.55),
    inset 0 2px 3px rgba(255, 255, 255, 0.7);
}

.deco-frame__mat {
  padding: 1.1rem;
  background: #f5ecd7;
}

.deco-frame__art {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  max-width: 100%;
  height: 13rem;
  background: #10131f;
  overflow: hidden;
}

.deco-frame__fan {
  width: 11rem;
  height: 5.5rem;
  background: conic-gradient(
    from 180deg at 50% 100%,
    transparent 0deg,
    #d4af37 7deg,
    transparent 14deg,
    #d4af37 21deg,
    transparent 28deg,
    #d4af37 35deg,
    transparent 42deg,
    #d4af37 49deg,
    transparent 56deg,
    #d4af37 63deg,
    transparent 70deg,
    #d4af37 77deg,
    transparent 84deg,
    #d4af37 91deg,
    transparent 98deg,
    #d4af37 105deg,
    transparent 112deg,
    #d4af37 119deg,
    transparent 126deg,
    #d4af37 133deg,
    transparent 140deg,
    #d4af37 147deg,
    transparent 154deg,
    #d4af37 161deg,
    transparent 168deg,
    #d4af37 175deg,
    transparent 180deg
  );
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}

.deco-frame__ring {
  position: absolute;
  bottom: 1.6rem;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid #d4af37;
  transform: rotate(45deg);
}

.deco-frame__base {
  margin-top: 0.8rem;
  width: 9rem;
  height: 0.9rem;
  background: linear-gradient(180deg, #8a6d1c, #10131f 70%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.deco-frame__plaque {
  font-family: 'Didot', Georgia, serif;
  font-weight: 700;
  font-size: 0.5rem;
  letter-spacing: 0.24em;
  color: #e8d9a8;
  background: #10131f;
  padding: 0.15rem 0.6rem;
  transform: translateY(-0.15rem);
}
</style>
