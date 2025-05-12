<script lang="ts" setup>
import type { BaseProps } from '@/types/props'

const { titleComponent = 'h1', taglineComponent = 'h2' } = defineProps<BaseProps>()
</script>

<template>
  <SectionBase class="section--padding-full-width intro__section" :background :background-position>
    <div class="intro">
      <div class="intro__head">
        <component :is="titleComponent" class="intro__title title__main">{{ title }}</component>
        <component :is="taglineComponent" v-if="tagline" class="intro__subtitle title__sub">{{ tagline }}</component>
      </div>
      <div class="intro__body content__body">
        <slot />
      </div>

      <div class="intro__footer">
        <slot name="footer" />
      </div>

      <SvgoHome class="intro__icon" />
    </div>
  </SectionBase>
</template>

<style scoped>
.intro {
  display: grid;
  position: relative;
  z-index: 2;
  grid-column: 2 / -2;
  text-align: center;
  gap: 1.5rem;

  @media (width > 1024px) {
    grid-template-columns: subgrid;
    grid-column: 8 / span 10;
  }

  &__title,
  &__subtitle,
  &__head {
    grid-column: 1 / -1;
  }

  &__section {
    display: grid;
    padding: 96px 0;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;

    @media (width > 768px) {
      padding: 120px 0 56px;

    }
  }

  &__body,
  &__footer,
  &__icon {
    grid-column: 1 / -1;
  }

  &__footer {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: center;
  }

  &__icon {
    margin-top: 7.5rem;
    width: 43px;
    height: 35px;
    color: var(--color-primary, #2E322D);
    place-self: center;
  }
}
</style>
