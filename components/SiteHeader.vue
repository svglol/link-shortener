<template>
  <div class="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 w-100 p-4">
    <div class="container flex flex-row justify-between mx-auto">
      <NuxtLink to="/" class="text-xl">
        Link Shortener
      </NuxtLink>
      <div class="flex flex-row gap-2">
        <ClientOnly>
          <UButton variant="ghost" color="gray" :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" @click="switchTheme" />
          <template #fallback>
            <UButton variant="ghost" color="gray" icon="i-heroicons-moon" @click="switchTheme" />
          </template>
        </ClientOnly>
        <UButton to="https://github.com/svglol/nuxt3-link-shortener" target="_blank" icon="fa6-brands:github" variant="ghost" color="gray" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mode = useColorMode()
const isDark = computed({
  get() {
    return mode.value === 'dark'
  },
  set() {
    mode.preference = mode.value === 'dark' ? 'light' : 'dark'
  },
})

function switchTheme() {
  isDark.value = !isDark.value
}
</script>

<style scoped></style>
