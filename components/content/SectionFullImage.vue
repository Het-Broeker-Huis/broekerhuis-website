<script setup lang="ts">
import type { BaseSectionProps } from '@/types/props'

defineProps<BaseSectionProps>()
</script>

<template>
  <SectionBase class="section--padding-full-width" :background :background-position>
    <div class="full-image__image">
      <slot />
    </div>
  </SectionBase>
</template>

<style>
.full-image {
  position: relative;
  padding-block: 3rem;

  &--background {
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      height: 50%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: #B9B59F;
    }
  }

  &__image {
    position: relative;
    z-index: 2;
    display: block;
    width: 100%;
    height: 80svh;

    @media (width > 768px) {
      height: auto;
      aspect-ratio: 16 / 9;
    }

    p:has(img),
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>