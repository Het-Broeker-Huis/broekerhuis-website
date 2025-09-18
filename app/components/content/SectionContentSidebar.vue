<script setup lang="ts">
import type { BaseSectionProps } from '~~/shared/types/props'

defineProps<BaseSectionProps>()
</script>

<template>
  <SectionBase class="section--padding-full-width content-sidebar__section" :background :background-position>
    <div class="content-sidebar">
      <div class="content-sidebar__body content__body">
        <slot />
      </div>

      <div class="content-sidebar__sidebar">
        <slot name="sidebar" mdc-unwrap="p" />
      </div>
    </div>
  </SectionBase>
</template>

<style>
.content-sidebar {
  display: grid;
  position: relative;
  z-index: 2;
  grid-column: 2 / -2;
  gap: 1.5rem;

  @media (width > 1024px) {
    grid-template-columns: subgrid;
    grid-column: 3 / -3;
  }

  &__body {
    grid-column: 1 / -1;
    grid-row: 2;

    @media (width > 1024px) {
      grid-column: span 11;
      grid-row: 1;
    }

    h2 {
      font-size: 2rem;
      line-height: 1;
      font-weight: 300;
      margin-bottom: 1.5rem;

      strong {
        font-weight: 400;
      }

      &:first-child {
        font-size: 3rem;
        font-weight: 400;
        line-height: 1.2;
      }

      +p,
      +h3 {
        font-family: var(--title-font-family);
        font-size: 1.5rem;
        line-height: 1.2;
        letter-spacing: -0.09rem;
        font-weight: 300;
      }
    }

    p {
      &:has(img) {
        margin: 3rem 0;
        ;
      }

      >img {
        display: block;
        width: 100%;
      }
    }

  }

  &__sidebar {
    grid-column: 1 / -1;
    grid-row: 1;

    @media (width > 1024px) {
      grid-column: span 7 / -1;
    }
  }

  &__section {
    display: grid;
    padding: 96px 0;
    grid-template-columns: subgrid;

    @media (width > 768px) {
      padding: 120px 0 56px;

    }
  }

}
</style>
