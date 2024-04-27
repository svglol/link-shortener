// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
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
    blob: true,
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
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

  nitro: {
    experimental: {
      openAPI: true,
    },
  },
})
