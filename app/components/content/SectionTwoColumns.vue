<script lang="ts" setup>
import type { BaseProps } from '~~/shared/types/props';

interface Props extends BaseProps {
  reverse?: boolean,
}

const { background = false, reverse = false, titleComponent = 'h1', taglineComponent = 'h2' } = defineProps<Props>();
</script>

<template>
  <SectionBase :class="['section--full-width', 'two-column__section', { 'two-column__section--reverse': reverse }]"
    :background :background-position>

    <div class="two-column__column two-column__column--content">
      <div class="two-column__content">
        <div class="two-column__head">
          <component :is="titleComponent" class="title__main">{{ title }}</component>
          <component :is="taglineComponent" v-if="tagline" class="title__sub">{{ tagline }}</component>
        </div>
        <div class="two-column__body content__body">
          <slot />
        </div>

        <div class="two-column__footer content__footer">
          <slot name="footer" mdc-unwrap="p" />
        </div>
      </div>
    </div>
    <div :class="['two-column__column', { 'two-column__column--image': $slots.image }]">
      <slot name="image" mdc-unwrap="p" />
    </div>
  </SectionBase>
</template>

<style>
.two-column {
  &__section {
    display: grid;
    grid-template-columns: subgrid;
    row-gap: 2rem;
  }

  &__column {
    position: relative;
    z-index: 2;


    &--content {
      grid-row: 2;
      display: grid;
      align-items: center;
      grid-column: 2 / -2;
      text-align: center;

      @media (width > 768px) {
        grid-column: 3 / span 9;
      }
    }

    &--image {
      grid-row: 1;
      grid-column: 1 / -1;
      aspect-ratio: 16 / 9;

      @media (width > 768px) {
        margin: 0;
        grid-column: 14 / span 9;
        aspect-ratio: 17 / 20;
      }


      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &--content,
    &--image {
      @media (width > 768px) {
        grid-row: 1;
      }
    }

    @media (width > 768px) {
      .two-column__section--reverse &--content {
        grid-column: 14 / span 9;
      }

      .two-column__section--reverse &--image {
        grid-column: 3 / span 9;
      }
    }
  }

  &__content {
    display: grid;
    gap: 1.5rem;
  }

}
</style>