<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
  }>(),
  {
    title: 'Midnight Drive',
    subtitle: 'side b · analog mix',
  },
)
</script>

<template>
  <div class="vapor-card">
    <div class="vapor-card__scene" aria-hidden="true">
      <span class="vapor-card__sun"></span>
      <span class="vapor-card__stripes"></span>
      <span class="vapor-card__floor"></span>
    </div>

    <div class="vapor-card__content">
      <h3 class="vapor-card__title">{{ title }}</h3>
      <p class="vapor-card__subtitle">{{ subtitle }}</p>
      <p class="vapor-card__body">
        <slot>
          Analog hearts on a neon horizon — best played at 2am with the windows
          down and the reverb up.
        </slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.vapor-card {
  max-width: 100%;
  background: linear-gradient(
    180deg,
    rgba(185, 103, 255, 0.08),
    rgba(22, 10, 51, 0.4) 45%,
    rgba(22, 10, 51, 0.85)
  );
  border: 1px solid rgba(255, 113, 206, 0.22);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 14px 44px rgba(0, 0, 0, 0.45),
    0 0 26px rgba(185, 103, 255, 0.14);
}

.vapor-card__scene {
  position: relative;
  height: 170px;
  overflow: hidden;
  background: linear-gradient(180deg, #1c0f3f 0%, #160a33 70%);
}

.vapor-card__sun {
  position: absolute;
  left: 50%;
  top: 14px;
  width: 132px;
  height: 132px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(
    circle at 36% 32%,
    #fffb96 0%,
    #ff71ce 34%,
    #b967ff 68%,
    rgba(22, 10, 51, 0) 100%
  );
}

.vapor-card__stripes {
  position: absolute;
  left: 50%;
  top: 14px;
  width: 132px;
  height: 132px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 7px,
    rgba(22, 10, 51, 0.92) 7px,
    rgba(22, 10, 51, 0.92) 13px
  );
}

.vapor-card__floor {
  position: absolute;
  left: -20%;
  right: -20%;
  bottom: -18px;
  height: 92px;
  transform: perspective(220px) rotateX(58deg);
  transform-origin: top center;
  background-image:
    repeating-linear-gradient(
      90deg,
      rgba(255, 113, 206, 0.32) 0 1px,
      transparent 1px 30px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(1, 205, 254, 0.3) 0 1px,
      transparent 1px 26px
    );
  -webkit-mask-image: linear-gradient(180deg, #000 35%, transparent 92%);
  mask-image: linear-gradient(180deg, #000 35%, transparent 92%);
}

.vapor-card__content {
  padding: 1.2rem 1.3rem 1.35rem;
}

.vapor-card__title {
  margin: 0;
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  background: linear-gradient(90deg, #ff71ce, #01cdfe, #b967ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.vapor-card__subtitle {
  margin: 0.35rem 0 0;
  font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 0.66rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #fffb96;
  text-shadow: 0 0 8px rgba(255, 251, 150, 0.5);
}

.vapor-card__body {
  margin: 0.9rem 0 0;
  font-size: 0.84rem;
  line-height: 1.7;
  color: #cdb8ea;
}
</style>
