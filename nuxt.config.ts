import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  modules: ['@pinia/nuxt'],
  typescript: {
    typeCheck: true,
  },
})
