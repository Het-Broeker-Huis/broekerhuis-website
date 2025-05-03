<script setup lang="ts">
import type { BaseSectionProps } from '@/types/props'

interface Props extends BaseSectionProps {
  padding?: boolean,
}

const { padding = false } = defineProps<Props>()
</script>

<template>
  <SectionBase :class="['full-image', padding ? 'section--padding-full-width' : 'section--full-width']" :background
    :background-position>
    <div class="full-image__image">
      <slot mdc-unwrap="p" />
    </div>
  </SectionBase>
</template>

<style>
.full-image {
  display: none;
  position: relative;
  padding-block: 3rem;

  @media (width > 768px) {
    display: block;
  }

  &--background {
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      height: 50%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: var(--color-secondary, #B9B59F);
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>