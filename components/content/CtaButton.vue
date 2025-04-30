<script setup lang="ts">
/**
 * Show an arrow icon next to the button text.
 * @default false
 */
const { variant = 'primary' } = defineProps<{
  arrow?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
}>();
</script>

<template>
  <div :class="['cta-button', { 'cta-button--icon': arrow }, `cta-button--${variant}`]">
    <slot mdc-unwrap="p" />
    <svgo-arrow v-if="arrow" class="cta-button__arrow" />
  </div>
</template>

<style>
.cta-button {
  position: relative;

  a {
    display: block;
    background-color: var(--color-primary, #2E322D);
    padding: 0.75rem 1rem;
    border-radius: 10rem;
    transition: 200ms;
    text-decoration: none;
    color: inherit;
    text-decoration: none;
  }

  &--primary {
    color: var(--color-white, #FFFFFF);

    a {
      background-color: var(--color-primary, #2E322D);
    }
  }

  &--secondary {
    color: var(--color-primary, #2E322D);

    a {
      background-color: var(--color-secondary, #B9B59F);
    }
  }

  &--ghost {
    color: var(--color-primary, #2E322D);

    a {
      background-color: transparent;
      border: 1px solid var(--color-primary, #2E322D);
    }
  }

  &--icon {
    a {
      padding: 0.75rem 3.5rem 0.75rem 1rem;
    }
  }

  &__arrow {
    position: absolute;
    pointer-events: none;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: 200ms;
  }

  @media (hover: hover) {
    &:hover {
      a {}

      .cta-button__arrow {
        transform: translateY(-50%) translateX(0.5rem);
      }
    }
  }
}
</style>