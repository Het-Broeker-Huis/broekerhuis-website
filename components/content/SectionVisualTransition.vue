<script setup lang="ts">
import type { BaseSectionProps } from '@/types/props'

const { background = false, backgroundPosition = "bottom" } = defineProps<BaseSectionProps>();

const slots = useSlots();
const slotNames = computed(() => Object.keys(slots).filter((slot) => slot.toLowerCase().startsWith("image_") ? slot : false));
</script>

<template>
  <SectionBase class="section--full-width visual-transition" :background :background-position>
    <div v-for="slot in slotNames" :key="slot" class="visual-transition__image">
      <slot :name="slot" mdc-unwrap="p" />
    </div>
  </SectionBase>
</template>

<style>
.visual-transition {
  position: relative;
  display: none;
  overflow: hidden;
  flex-flow: row nowrap;
  padding-block: 3rem 6rem;
  gap: var(--column-width, 3vw);

  @media (width > 768px) {
    dsiplay: flex;
  }

  &__image {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 5;

    &:nth-child(even) {
      transform: translateY(var(--column-width, 3vw));
    }

    &:nth-child(n+3) {
      display: none;

      @media (width > 768px) {
        display: block;
      }
    }

    &:first-child {
      margin-left: calc(var(--column-width, 3vw) / -2);
    }

    &:last-child {
      margin-right: calc(var(--column-width, 3vw) / -2);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>