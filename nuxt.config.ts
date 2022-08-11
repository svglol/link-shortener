import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt', '@nuxtjs/color-mode', 'trpc-nuxt', '@vueuse/nuxt'],
  runtimeConfig: {
    public: {
      baseUrl: 'https://localhost:3000',
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  formkit: {
    configFile: 'formkit.config.js',
  },
  trpc: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    endpoint: '/trpc',
  },
  typescript: {
    strict: true,
  },
  colorMode: {
    dataValue: 'theme',
    classSuffix: '',
  },
});
