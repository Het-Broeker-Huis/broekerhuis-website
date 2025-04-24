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
    <nuxt-link to="/">
      <SvgoHetBroekerHuisLogo :font-controlled="false" class="top-nav__logo" />
    </nuxt-link>
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
.top-nav {
  --logo-width: clamp(37px, 3.33vw, 48px);

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  grid-column: 1 / -1;
  padding: 0.625rem 0;


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

    background: linear-gradient(180deg, rgba(46, 50, 45, 0.90) 0%, rgba(46, 50, 45, 0.80) 100%);
    backdrop-filter: blur(4px);
    animation: topnav-bar-progress auto linear;
    animation-timeline: --page-scroll;
    transition: min-height 0.3s ease-in-out;
  }

  &--open {
    &:before {
      animation: none;
      opacity: 1;
      min-height: 100svh;
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
    width: 100svw;
    /* 98px is the height of the top-nav */
    height: calc(100svh - 98px);
    top: 98px;
    display: grid;
    place-items: center;

    &:before {
      display: none;
    }
  }
}
</style>