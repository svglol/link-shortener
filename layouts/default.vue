<template>
  <div class="bg-gray-50 dark:bg-gray-950 flex min-h-screen flex-auto flex-col transition-colors">
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Link Shortener' })
</script>
