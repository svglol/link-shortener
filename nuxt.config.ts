// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/devtools',
    'nuxt-icon',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxt/fonts',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  hub: {
    database: true,
    cache: true,
    kv: true,
  },

  runtimeConfig: {
    public: {
      baseUrl: 'https://localhost:3000',
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },

  typescript: {
    strict: true,
  },

  devtools: {
    enabled: true,
  },
})
