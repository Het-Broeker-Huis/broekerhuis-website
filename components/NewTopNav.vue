<template>
  <nav class="new-top-nav">
    <ul class="new-top-nav__items">
      <li class="new-top-nav__item"><nuxt-link class="new-top-nav__link" to="/restaurant">Restaurant</nuxt-link></li>
      <li class="new-top-nav__item"><nuxt-link class="new-top-nav__link" to="/het-broeker-huis">Het Broeker
          Huis</nuxt-link>
      </li>
      <li class="new-top-nav__item"><nuxt-link class="new-top-nav__link" to="/visit">Visit</nuxt-link></li>
    </ul>
  </nav>
</template>

<style>
.new-top-nav {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  grid-column: 1 / -1;
  padding: 0.625rem 0;

  @media (width > 768px) {
    padding: 1.5rem 0;
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

    /* background: linear-gradient(180deg, color-mix(in srgb,
          var(--color-primary) 90%,
          transparent) 0%, color-mix(in srgb,
          var(--color-primary) 80%,
          transparent) 100%);
    backdrop-filter: blur(4px);
    animation: topnav-bar-progress auto linear;
    animation-timeline: --page-scroll;
    transition: min-height 0.3s ease-in-out; */
  }

  &--open {
    &:before {
      animation: none;
      opacity: 1;
      min-height: 100%;
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
    width: 100svw;
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
</style>