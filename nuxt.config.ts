// https://nuxt.com/docs/api/configuration/nuxt-config
const DEFAULT_PORT = 3001;
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: process.env.NUXT_PUBLIC_PORT as any || DEFAULT_PORT,
  },
  typescript: {
    shim: false,
  },
  modules: [

    // With options
    ['@nuxtjs/eslint-module', {
      cache: true,
      fix: true,
      failOnError: false,
      include: ['./**/*.{js,jsx,ts,tsx,vue}']
    }],
    '@pinia/nuxt'
  ],

  // https://nuxt.com/docs/guide/going-further/runtime-config
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      port: '' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
})
