<script setup lang="ts">
import Branch from '~/assets/branch.svg?component';

const { title = "Navigeren", items } = defineProps<{
  title?: string;
  items?: Array<{
    name: string;
    to: string;
  }>;
}>();

console.log(items);
</script>

<template>
  <div class="table-of-contents">
    <h4 class="table-of-contents__title">{{ title }}</h4>

    <ul class="table-of-contents__list">
      <li v-for="{ to, name } in items" :key="to" class="table-of-contents__item">
        <nuxt-link :to class="table-of-contents__link">
          <div class="table-of-contents__icon-wrapper">
            <span class="table-of-contents__icon">
              <SvgoArrow />
            </span>
          </div>
          {{ name }}
        </nuxt-link>
      </li>
    </ul>
    <Branch class="table-of-contents__visual" />
  </div>
</template>

<style>
.table-of-contents {
  position: sticky;
  overflow: hidden;
  top: var(--top-padding-offset, 130px);
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
    display: flex;
    flex-flow: column nowrap;
    gap: 0.75rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__icon-wrapper {
    flex: 0 0 1.5rem;
  }

  &__icon {
    width: 100%;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border-radius: 99999px;
    transition: 300ms;
    font-size: 0.75rem;
  }

  &__link {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--color-primary);

    @media (hover: hover) {
      &:hover {
        .table-of-contents__icon {
          background-color: var(--color-primary);
          color: var(--color-background);
        }
      }
    }
  }

  &__visual {
    position: absolute;
    width: 30%;
    right: -5%;
    bottom: 3%;
    opacity: 0.3;

    path {
      fill: var(--color-primary);
    }
  }
}
</style>