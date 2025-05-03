<script lang="ts" setup>
defineProps<{
  href: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
}>();
</script>

<template>
  <a :href="href" :target="target" :rel="rel" class="external-link">
    <slot mdc-unwrap="p" />
  </a>
</template>