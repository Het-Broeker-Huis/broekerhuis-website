<script setup lang="ts">
import type { DesignState } from '~/types/design'

const design = useState<DesignState>('design', () => ({}));

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

design.value.primaryColor = home.value?.design?.primaryColor
design.value.secondaryColor = home.value?.design?.secondaryColor
design.value.backgroundColor = home.value?.design?.backgroundColor
</script>

<template>
  <div class="content">
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </div>
</template>

<style>
.content,
.content>div {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
}
</style>
