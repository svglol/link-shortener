<template>
  <div class="navbar bg-base-100 border-b border-base-content/20">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <NuxtLink
        to="/"
        class="btn btn-ghost normal-case text-xl"
      >
        Link Shortener
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <ClientOnly>
        <button
          class="btn btn-ghost btn-circle"
          @click="switchTheme"
        >
          <label class="swap swap-rotate">
            <div :class="{ 'swap-on': $colorMode.value === 'dark', 'swap-off': $colorMode.value !== 'dark' }">
              <Icon
                name="heroicons:sun-20-solid"
                class="text-xl"
              />
            </div>
            <div :class="{ 'swap-on': $colorMode.value === 'light', 'swap-off': $colorMode.value !== 'light' }">
              <Icon
                name="heroicons:moon-20-solid"
                class="text-xl"
              />
            </div>
          </label>
        </button>

        <template #fallback>
          <button class="btn btn-ghost btn-circle">
            <Icon
              name="heroicons:moon-20-solid"
              class="text-xl"
            />
          </button>
        </template>
      </ClientOnly>
      <NuxtLink
        to="https://github.com/svglol/nuxt3-link-shortener"
        target="_blank"
        class="btn btn-ghost btn-circle"
      >
        <Icon
          name="fa6-brands:github"
          class="text-xl"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function switchTheme() {
  if (colorMode.value === 'light') {
    colorMode.preference = 'dark';
  } else {
    colorMode.preference = 'light';
  }
}
</script>

<style scoped></style>
