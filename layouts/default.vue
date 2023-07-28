<template>
  <div>
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from 'components/SiteHeader.vue'

useHead({ title: 'Link Shortener' })
</script>
