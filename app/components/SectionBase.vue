<script setup lang="ts">
import type { BaseSectionProps } from '~~/shared/types/props'

const { background = false, backgroundPosition = "top" } = defineProps<BaseSectionProps>()

const hasBackground = computed<boolean>(() => typeof background === 'string' ? background === 'true' : !!background);
</script>

<template>
  <section
    :class="['section', { 'section--background': hasBackground }, { [`section--background-${backgroundPosition}`]: backgroundPosition }]">
    <slot />
  </section>
</template>

<style>
.section {
  position: relative;
  padding-block: 3rem;

  &--background {
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      width: 100%;
      left: 0;
      top: 0;
      background-color: var(--color-secondary, #B9B59F);
    }

    &-top,
    &-bottom {
      &::after {
        height: 50%;
      }
    }

    &-bottom {
      &::after {
        top: auto;
        bottom: 0;
      }
    }

    &-full {
      &::after {
        height: 100%;
      }
    }
  }
}
</style>