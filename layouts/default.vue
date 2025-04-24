<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const { data } = useAsyncData('navigation', async () => {
  const nav = await queryCollectionNavigation('content');

  const flattenNav = (items: ContentNavigationItem[]) => {
    return items.reduce((acc: ContentNavigationItem[], item: ContentNavigationItem) => {
      if (item.displayInTopNav === true) {
        acc.push(item);
      }
      if (item.children && item.children.length > 0) {
        acc = acc.concat(flattenNav(item.children));
      }
      return acc;
    }, []);
  };

  const flatNav = flattenNav(nav);

  const uniqueNav: ContentNavigationItem[] = flatNav.filter(
    (item, index, self) => index === self.findIndex((t) => t.path === item.path)
  );

  return uniqueNav.sort((a, b) => (a.topNavOrder as number) - (b.topNavOrder as number));

});
</script>

<template>
  <div class="layout">
    <LayoutTopNav v-if="data" :items="data" />
    <main class="main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: repeat(var(--columns, 24), 1fr);
}

.header,
.main {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}
</style>
