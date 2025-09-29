<script lang="ts" setup>

</script>

<template>
  <div class="event-card">
    <div class="event-card__head">
      <slot name="head" mdc-unwrap="p" />
    </div>
    <div class="event-card__body">
      <slot />
    </div>
    <div class="event-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
.event-card {

  &__head {
    >img {
      display: block;
      width: 100%;
    }
  }

  &__body,
  &__footer {
    padding-inline: calc(100vw / 24 * 1);
  }

  &__body {
    padding-block: 1rem;

    h2,
    h3,
    h4,
    h5 {
      margin-block-end: 0.5rem;

      >strong {
        display: block
      }
    }
  }

  &__footer {
    display: flex;
  }
}
</style>