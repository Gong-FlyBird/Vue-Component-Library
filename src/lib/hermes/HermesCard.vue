<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    title?: string
    text?: string
    price?: string
  }>(),
  {
    label: 'Maison',
    title: 'The Silk Road Collection',
    text: 'Hand-finished leather goods crafted in our Paris atelier since 1837, each piece signed and numbered by the same hands.',
    price: '€ 4,850',
  },
)
</script>

<template>
  <article class="hermes-card">
    <div class="hermes-card__inner">
      <p class="hermes-card__label">{{ props.label }}</p>
      <h3 class="hermes-card__title">{{ props.title }}</h3>
      <div class="hermes-card__rule" aria-hidden="true">
        <span class="hermes-card__line"></span>
        <span class="hermes-card__diamond"></span>
        <span class="hermes-card__line"></span>
      </div>
      <p class="hermes-card__text">{{ props.text }}</p>
      <footer class="hermes-card__foot">
        <span class="hermes-card__price">{{ props.price }}</span>
        <button type="button" class="hermes-card__link">Découvrir</button>
      </footer>
    </div>
  </article>
</template>

<style scoped>
.hermes-card {
  border-radius: 14px;
  border: 1px solid rgba(111, 78, 51, 0.55);
  background-color: #f6efdf;
  background-image:
    radial-gradient(rgba(111, 78, 51, 0.06) 1px, transparent 1px),
    radial-gradient(rgba(217, 111, 29, 0.05) 1px, transparent 1px);
  background-size:
    7px 7px,
    11px 11px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 18px 36px rgba(94, 62, 30, 0.28);
  transition:
    transform 250ms ease,
    box-shadow 250ms ease;
}

.hermes-card:hover {
  transform: translateY(-4px);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 26px 44px rgba(94, 62, 30, 0.34),
    0 0 0 1px rgba(185, 146, 79, 0.35);
}

.hermes-card__inner {
  margin: 7px;
  padding: 1.7rem 1.8rem 1.4rem;
  border: 1px solid rgba(185, 146, 79, 0.65);
  border-radius: 9px;
}

.hermes-card__label {
  margin: 0 0 0.45rem;
  color: #d96f1d;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-variant: small-caps;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.68rem;
}

.hermes-card__title {
  margin: 0;
  color: #46301c;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.hermes-card__rule {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 1rem 0;
}

.hermes-card__line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(185, 146, 79, 0.25), #b9924f);
}

.hermes-card__line:last-child {
  background: linear-gradient(90deg, #b9924f, rgba(185, 146, 79, 0.25));
}

.hermes-card__diamond {
  width: 7px;
  height: 7px;
  transform: rotate(45deg);
  flex-shrink: 0;
  border: 1px solid #b9924f;
  background: rgba(185, 146, 79, 0.3);
}

.hermes-card__text {
  margin: 0;
  color: #6f5a44;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-size: 0.85rem;
  line-height: 1.7;
}

.hermes-card__foot {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(185, 146, 79, 0.35);
}

.hermes-card__price {
  color: #6f4e33;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-size: 1.05rem;
  font-weight: 600;
}

.hermes-card__link {
  border: none;
  background: transparent;
  padding: 0.2rem 0;
  color: #b9924f;
  font-family: 'Didot', 'Playfair Display', Georgia, serif;
  font-variant: small-caps;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.7rem;
  border-bottom: 1px solid rgba(185, 146, 79, 0.45);
  cursor: pointer;
  transition:
    color 200ms ease,
    border-color 200ms ease;
}

.hermes-card__link:hover {
  color: #d96f1d;
  border-color: #d96f1d;
}

.hermes-card__link:focus-visible {
  outline: 2px solid #d96f1d;
  outline-offset: 3px;
}
</style>
