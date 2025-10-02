// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  runtimeConfig: {
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,
    public: {
      turnstileSiteKey: process.env.TURNSTILE_SITE_KEY
    }
  }
})