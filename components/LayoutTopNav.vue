<script lang="ts" setup>
import type { ContentNavigationItem } from '@nuxt/content';

const { items } = defineProps<{
  items: ContentNavigationItem[]
}>();

const firstNavItems = computed(() => items.slice(0, Math.ceil(items.length / 2)));
const secondNavItems = computed(() => items.slice(Math.ceil(items.length / 2)));

const mobileMenu = ref(false);
</script>

<template>
  <nav :class="['top-nav', { 'top-nav--open': mobileMenu }]">
    <div class="top-nav__items top-nav__items--left">
      <div v-for="item in firstNavItems" :key="item.path" class="top-nav__item">
        <nuxt-link :to="item.path" class="top-nav__link">
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>

    <div class="top-nav__items top-nav__items--right">
      <div v-for="item in secondNavItems" :key="item.path" class="top-nav__item">
        <nuxt-link :to="item.path" class="top-nav__link">
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
    <div class="top-nav__toggle toggle">
      <button class="toggle__button" @click.prevent="mobileMenu = !mobileMenu">
        <span class="toggle__icon" /> Menu
      </button>
    </div>
  </nav>

  <div v-if="mobileMenu" class="top-nav top-nav__mobile">
    <div class="top-nav__items--grid">
      <div v-for="item in items" :key="item.path" class="top-nav__item top-nav__item--mobile">
        <nuxt-link :to="item.path" class="top-nav__link top-nav__link--mobile" @click="mobileMenu = false">
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes grow-progress {
  0% {
    opacity: 0;
  }

  2% {
    opacity: 1;
  }
}

.top-nav {
  --logo-width: clamp(37px, 3.33vw, 48px);

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  grid-column: 1 / -1;
  padding: 0.625rem 0;

  @media (width > 768px) {
    padding: 1.5rem 0;
    ;
  }

  &:before {
    display: block;
    position: absolute;
    min-height: 0;
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }

  &--open {
    &:before {
      animation: none;
      opacity: 1;
      min-height: 100vh;
    }
  }


  &__logo {
    width: var(--logo-width);
    color: var(--color-white, #fff);
    margin-left: 50%;
    transform: translateX(-50%);
  }

  &__items {
    display: none;

    @media (width > 768px) {
      position: absolute;
      top: 50%;
      display: flex;
      flex-flow: row nowrap;
      gap: 0.75rem;

      &--left {
        right: 50%;
        justify-content: flex-end;
        transform: translate(calc((var(--logo-width) / -2) - 3rem), -50%);
      }

      &--right {
        left: 50%;
        justify-content: flex-start;
        transform: translate(calc((var(--logo-width) / 2) + 3rem), -50%);
      }
    }

    &--grid {
      display: grid;
      place-items: center;
      gap: 2rem;
      transform: translateY(calc(-98px / 2))
    }
  }

  &__item,
  &__link {
    color: var(--color-white, #fff);
  }

  &__item {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.75rem;
    color: var(--color-white, #fff);


    &:after {
      content: '●';
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &--mobile {
      &:after {
        display: none;
      }
    }
  }

  &__link {
    text-transform: uppercase;
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: -0.32px;
    font-weight: 450;
  }

  &__toggle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.5rem;
  }

  &__mobile {
    width: 100vw;
    /* 98px is the height of the top-nav */
    height: calc(100vh - 98px);
    top: 98px;
    display: grid;
    place-items: center;

    &:before {
      display: none;
    }
  }
}

.toggle {

  @media (width > 768px) {
    display: none;
  }

  &__icon {
    position: relative;
    display: block;
    width: 1.5rem;
    height: 2px;
    background: var(--color-white, #fff);

    &:before,
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: var(--color-white, #fff);
      position: absolute;
      left: 0;
      transition: all 0.3s ease-in-out;
    }

    &:before {
      top: -6px;
    }

    &:after {
      bottom: -6px;
    }
  }

  &__button {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    background: transparent;
    border: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 450;
    letter-spacing: -0.32px;

    color: var(--color-white, #fff);
  }

}
</style>