// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-svgo', 'vuetify-nuxt-module'],
  svgo: {
    autoImportPath: './assets/svg/'
  },
  css: [
      '~/styles.css',
  ],
  typescript: {
    strict: false
  },
})
