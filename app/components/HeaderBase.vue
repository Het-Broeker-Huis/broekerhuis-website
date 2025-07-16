<template>
  <header class="header">
    <slot />
  </header>
</template>

<style>
:root {
  --hdr-gradient: radial-gradient(farthest-corner circle at 0% 100% in oklab,
      oklch(0% 0 0 / 60%) 0%, 22%, oklch(0% 0.00 0 / 0%) 50%);
  --sdr-gradient: radial-gradient(farthest-corner circle at 0% 100%,
      #0009 0%, 22%, #0000 100%);
}

.header {
  position: relative;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: 1fr 1fr;
  grid-column: 1 / -1;
  background-color: var(--color-primary, #000000);

  @media (width > 768px) {
    grid-template-rows: 1fr;
  }

  &__title,
  &__tagline {
    color: var(--color-white, #FFFFFF);
  }

  &__title {
    width: 100%;
    font-size: clamp(2rem, 8vw, 6rem);
    text-align: center;
    line-height: 1.1;
  }

  &__tagline {
    text-align: left;
    line-height: 0.75;
    font-family: var(--tagline-font-family, 'Lora');
    font-size: clamp(1.6rem, 4vw, 3rem);
    letter-spacing: -1.92px;
    font-weight: 500;
  }

  &__image {
    position: relative;
    z-index: 1;

    &:after,
    &:before {
      position: absolute;
      z-index: 1;
      content: '';
      display: block;
      width: 100%;
      height: 50%;
    }

    &:after {
      bottom: 0;
      left: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.00) 100%);
    }

    &:before {
      top: 0;
      left: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
    }

    @media (width > 768px) {

      &:before {
        display: none;
      }

      &:after {
        height: 100%;
        background: var(--hdr-gradient);
      }
    }

    >img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>