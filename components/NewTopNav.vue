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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  padding: 1rem;

  &__items {
    display: flex;
    gap: 2rem;
  }

  &__item {
    list-style: none;
  }

  &__link {
    text-decoration: none;
    color: var(--color-white, #fff);
    font-size: 1rem;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-secondary);
    }
  }

  &__link-active {
    color: var(--color-secondary);
  }
}
</style>