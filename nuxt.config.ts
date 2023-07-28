// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/devtools',
    'nuxt-icon',
  ],

  runtimeConfig: {
    public: {
      baseUrl: 'https://localhost:3000',
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    injectPosition: 0,
  },

  formkit: {
    configFile: 'formkit.config.js',
  },

  typescript: {
    strict: true,
  },

  colorMode: {
    dataValue: 'theme',
    classSuffix: '',
  },

  build: {
    transpile: ['trpc-nuxt'],
  },

  devtools: {
    enabled: true,
  },
});
