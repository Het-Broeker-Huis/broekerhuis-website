<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();


const { public: publicConfig } = useRuntimeConfig();

if (import.meta.server) {
  console.error(error);
}

useSeoMeta({
  robots: {
    noindex: true,
    nofollow: true,
  },
});


const showStack = computed(() => import.meta.env.DEV);


const handleError = () => clearError({ redirect: '/' })

const title = computed(() => {
  if (error.statusCode === 404) {
    return 'Page not found'
  }
  return publicConfig.customErrorTitle || 'An unexpected error occurred'
})
const description = computed(() => {
  if (error.statusCode === 404) {
    return 'We could not find the page you were looking for.'
  }
  return publicConfig.customErrorMessage || 'An unexpected error occurred. Please try again later.'
})
</script>

<template>
  <NuxtLayout>
    <HeroHeader title="Oops..." tagline="something went wrong">
      <template #image>
        <NuxtImg src="/20250331_BROEKERHUIS_1492.JPG" />
      </template>
    </HeroHeader>
    <SectionBase class="page-error">
      <div class="page-error__content">
        <ProseH1>{{ title }}</ProseH1>
        <ProseP>{{ description }}</ProseP>
        <div class="page-error__actions">
          <CtaButton arrow class="page-error__button">
            <a @click="handleError">
              Back home
            </a>
          </CtaButton>
        </div>
      </div>
      <pre v-if="showStack" class="page-error__stack">
    {{ error.stack }}
  </pre>
    </SectionBase>
  </NuxtLayout>
</template>

<style>
.page-error {

  grid-column: 7 / span 12;

  &__content {
    max-width: 80ch;
    margin-block: 0.5rem;
    margin-block-end: 2rem;
    white-space: pre-line;
  }

  &__actions {
    display: flex;
  }

  &__button {
    cursor: pointer;
  }

  &__stack {
    max-width: 100%;
    overflow: scroll;
  }
}
</style>