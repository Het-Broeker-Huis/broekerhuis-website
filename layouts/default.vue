<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import type { DesignState } from '~/types/design';

const design = useState<DesignState>('design')

const primaryColor = computed(() => design.value?.primaryColor || '#2E322D');
const secondaryColor = computed(() => design.value?.secondaryColor || '#B9B59F');
const backgroundColor = computed(() => design.value?.backgroundColor || '#E5E9E9');
</script>

<template>
  <div class="layout">
    <LayoutTopNav />
    <main class="main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style>
.layout {
  --color-primary: v-bind(primaryColor);
  --color-primary-rgb: 46, 50, 45;
  /* Default RGB values for #2E322D */
  --color-secondary: v-bind(secondaryColor);
  --color-background: v-bind(backgroundColor);
  --color-body: color-mix(in srgb,
      var(--color-primary) 80%,
      var(--color-background));

  display: grid;
  grid-template-columns: repeat(var(--columns, 24), 1fr);



  color: var(--color-body, rgba(45, 54, 47, 0.8));
  background-color: var(--color-background);
}

.header,
.main {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}
</style>
