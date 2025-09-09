<script lang="ts" setup>
defineProps<{
  title?: string
  tagline?: string
}>();
</script>

<template>
  <HeaderBase class="hero-header">
    <h1 class="header__title hero-header__title">{{ title }}</h1>

    <p class="header__tagline hero-header__tagline">{{ tagline }}</p>

    <div class="header__image hero-header__image">
      <slot name="image" mdc-unwrap="p" />
    </div>

    <slot />
  </HeaderBase>
</template>

<style>
.hero-header {

  &__title,
  &__tagline {
    position: absolute;
    z-index: 3;
  }

  &__title {
    grid-column: 5 / -5;
    top: 50%;
    transform: translateY(-50%);
  }

  &__tagline {
    grid-column: 3 / span 20;
    bottom: 5%;

    @media (width > 768px) {
      grid-column: 3 / span 7;
      bottom: 15%;
    }
  }

  &__image {
    grid-column: 1 / -1;
    aspect-ratio: 16 / 9;
    grid-row: 2;

    @media (width > 768px) {
      grid-row: 1;
      aspect-ratio: 4 / 3;
      grid-column: 13 / span 12;

      &--reverse {
        grid-column: 1 / span 12;
      }
    }
  }
}
</style>