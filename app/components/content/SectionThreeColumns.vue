<script lang="ts" setup>
import type { BaseProps } from '~~/shared/types/props';

const { background = false, titleComponent = 'h1', taglineComponent = 'h2' } = defineProps<BaseProps>();
</script>

<template>
  <SectionBase :class="['section--full-width', 'three-column__section']" :background :background-position>
    <div class="three-column__head" v-if="title || tagline">
      <component :is="titleComponent" class="title__main">{{ title }}</component>
      <component :is="taglineComponent" v-if="tagline" class="title__sub">{{ tagline }}</component>
    </div>

    <div class="three-column__body">
      <slot />
    </div>
  </SectionBase>
</template>

<style>
.three-column {
  &__section {
    display: grid;
    grid-template-columns: subgrid;
  }

  &__head {
    grid-column: 1 / -1;
    text-align: center;
    margin-bottom: 2rem;
  }

  &__body {
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
    grid-column: 2 / -2;

    @media (width > 768px) {
      justify-content: space-between;
      flex-flow: row nowrap;

      >div {
        flex: 0 1 33%;
      }
    }
  }
}
</style>