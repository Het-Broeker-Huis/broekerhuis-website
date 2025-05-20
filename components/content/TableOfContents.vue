<template>
  <div class="table-of-contents">
    <h4 class="table-of-contents__title">Navigeren</h4>

    <ul class="table-of-contents__list">
      <li class="table-of-contents__item"><nuxt-link to="#a-village-where-time-slows-down"
          class="table-of-contents__link">
          <span class="table-of-contents__icon">
            <SvgoArrow />
          </span> How to get in Broek in
          Waterland</nuxt-link></li>
    </ul>
    <slot />
  </div>
</template>

<style>
.table-of-contents {
  position: sticky;
  top: calc(106px + 2rem);
  border-radius: 0.125rem;
  border: 1px solid var(--color-primary-30);
  padding-block: 3rem;
  padding-inline: 1.5rem;

  &__title {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.09rem;
    margin-block-end: 1.5rem;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__icon {
    display: grid;
    place-items: center;
    flex: 0 0 1.5rem;
    aspect-ratio: 1;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border-radius: 99999px;
    transition: 300ms;
    ;
  }

  &__link {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--color-primary);

    &:hover {
      .table-of-contents__icon {
        background-color: var(--color-primary);
        color: var(--color-background);
      }
    }
  }
}
</style>