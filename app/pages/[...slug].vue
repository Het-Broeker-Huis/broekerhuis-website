<script setup lang="ts">
import type { DesignState } from '~/types/design'

const route = useRoute()
const design = useState<DesignState>('design', () => ({}));

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

design.value.primaryColor = page.value?.design?.primaryColor
design.value.secondaryColor = page.value?.design?.secondaryColor
design.value.backgroundColor = page.value?.design?.backgroundColor

</script>

<template>
  <div class="content">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Page not found</div>
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
