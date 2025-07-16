<script setup lang="ts">
import Carrot from '~/assets/carrot.svg?component'
import BellPepper from '~/assets/bell-pepper.svg?component'
</script>

<template>
  <HeaderBase class="home-header">
    <Carrot class="home-header__visual home-header__visual--carrot" />
    <BellPepper class="home-header__visual home-header__visual--bell-pepper" />
    <div class="home-header__welcome">
      <div class="home-header__main">
        <span class="header__tagline home-header__tagline home-header__tagline--intro">Welkom in</span>
        <h2 class="header__title home-header__title">Broek in Waterland</h2>
      </div>
      <h3 class="header__tagline home-header__tagline home-header__tagline--outro">Het mooiste dorp van Nederland</h3>
    </div>

    <div class="header__image home-header__image">
      <slot name="image" mdc-unwrap="p" />
    </div>

  </HeaderBase>
</template>

<style>
.home-header {
  overflow: hidden;

  @media (width > 768px) {
    aspect-ratio: 9 / 5;
  }

  &__visual {
    position: absolute;
    opacity: 0.15;

    &--carrot {
      width: 100svw;
      left: -25svw;
      top: -22svw;
    }

    &--bell-pepper {
      width: 40svw;
      right: -10svw;
      bottom: 40svw;
    }

    @media (width > 768px) {

      &--carrot {
        width: 45svw;
        left: -5svw;
        top: -5svw;
      }

      &--bell-pepper {
        width: 20svw;
        right: 55svw;
        bottom: -5svw;
      }
    }
  }

  &__welcome {
    position: absolute;
    z-index: 3;
    display: grid;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    gap: 1rem;

    @media (width > 768px) {
      position: relative;
      place-self: center;
      top: unset;
      transform: unset;
      margin-top: 2rem;
      gap: 4rem;
      grid-template-columns: subgrid;
      grid-column: 7 / -7;
      grid-row: 1;
    }
  }

  &__main {
    display: grid;
    width: 100%;
    text-align: center;
    gap: 1rem;

    @media (width > 768px) {
      gap: 0;
      grid-column: 1 / -1;
    }
  }

  &__tagline {
    &--intro {
      font-size: clamp(1.6rem, 4vw, 2.25rem);
      text-align: center;
    }

    &--outro {
      width: 100%;
      text-align: center;

      @media (width > 768px) {
        text-align: left;
        grid-column: 8 / -1;
      }
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: clamp(3rem, 8vw, 8rem);
    letter-spacing: clamp(-3px, 2vw, -12px);
    font-weight: 400;
  }

  &__image {
    grid-column: 1 / -1;
    aspect-ratio: 16 / 9;
    grid-row: 2;

    @media (width > 768px) {
      grid-row: 1;
      aspect-ratio: auto;
      height: 100%;
      grid-column: 13 / span 12;

      &--reverse {
        grid-column: 1 / span 12;
      }
    }
  }
}
</style>